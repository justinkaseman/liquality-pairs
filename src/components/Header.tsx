import React from "react";
import Paper from "@material-ui/core/Paper";
import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.svg";
import "../styles/App.scss";

function Header() {
  return (
    <Paper style={{ marginBottom: "3px", padding: "16px" }}>
      <header className="App-header">
        <a
          className="App-link"
          href="https://liquality.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <div className="Header-buttons-container">
          <ThemeToggle />
          <Menu />
        </div>
      </header>
    </Paper>
  );
}

export default Header;
