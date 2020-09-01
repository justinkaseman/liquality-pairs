import React, { useState, useEffect, useCallback } from "react";
import TradingPairsTable from "./TradingPairs_Table";
import { useGlobalState } from "../context";
import { useInterval } from "../shared/hooks";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function TradingPairs() {
  const { refreshRate } = useGlobalState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = useCallback(() => {
    fetch("https://liquality.io/swap/agent/api/swap/marketinfo")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useInterval(() => {
    fetchData();
  }, refreshRate * 1000);

  if (loading)
    return (
      <div>
        <CircularProgress color="inherit" />
      </div>
    );

  return <TradingPairsTable data={data}></TradingPairsTable>;
}
