import React, { useState, useEffect, useCallback } from "react";
import TradingPairsTable from "./TradingPairs_Table";
import Alert from "./Alert";
import { useGlobalState } from "../context";
import { useInterval } from "../shared/hooks";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

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
      <Container maxWidth={false}>
        <div className="Container-column" style={{ height: "70vh" }}>
          <CircularProgress size={50} color="inherit" />
        </div>
      </Container>
    );

  return (
    <Container maxWidth={false}>
      <TradingPairsTable data={data}></TradingPairsTable>
      {error && <Alert open={!!error} />}
    </Container>
  );
}
