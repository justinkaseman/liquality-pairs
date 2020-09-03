import React from "react";
import Paper from "@material-ui/core/Paper";
import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import { useGlobalState } from "../context";
import logo_black from "../assets/logo_black.svg";
import logo_white from "../assets/logo_white.svg";

import "../styles/App.scss";

function Header() {
  const { theme } = useGlobalState();
  return (
    <Paper className="Header-paper">
      <header className="Header-container" data-testid="header">
        <a
          className="App-link"
          href="https://liquality.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={theme === "light" ? logo_black : logo_white}
            className="App-logo"
            alt="logo"
          />
        </a>
        <div className="Header-buttons">
          <ThemeToggle />
          <Menu />
        </div>
      </header>
    </Paper>
  );
}

export default Header;
