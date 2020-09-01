import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Header, TradingPairs } from "./components";
import { useGlobalState } from "./context";

function App() {
  const { theme } = useGlobalState();
  const currentTheme = createMuiTheme({
    palette: {
      type: theme,
    },
  });
  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <Header />
        <TradingPairs />
      </div>
    </ThemeProvider>
  );
}

export default App;
