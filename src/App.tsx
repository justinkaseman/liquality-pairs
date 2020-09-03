import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header, TradingPairs } from "./components";
import { GlobalProvider, useGlobalState } from "./context";

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

function WrappedApp() {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
}

export default WrappedApp;
