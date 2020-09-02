import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
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
      <CssBaseline>
        <Header />
        <TradingPairs />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
