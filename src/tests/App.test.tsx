import React from "react";
import { render, act } from "@testing-library/react";
import { waitForElementToBeRemoved, screen } from "@testing-library/dom";

import App from "../App";

test("Smoke test", () => {
  const { getByTestId } = render(<App />);
  getByTestId("header");
  getByTestId("tradingPairs:loading");
});

test("Loads API data into a table", async () => {
  render(<App />);

  await act(
    async () =>
      await waitForElementToBeRemoved(() =>
        screen.getByTestId("tradingPairs:loading")
      )
  );

  screen.getByTestId("tradingPairs:table");
});
