import React from "react";
import { ThemeProvider } from "styled-components";
import JobBoard from "./components/JobBoard";
import appLogo from "./assets/gitjobs_logo.svg";
import "./styles/index.css";

const theme = {
  primary_red: "#f31e1e",
  primary_lightred: "#e95252",
  primary_grey: "#5c5c5c",
  primary_coal: "#303030",
};

const handleRefresh = () => {
  window.location.reload(false);
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <div className="app-logo">
            <img
              src={appLogo}
              alt="The gitjobs site logo"
              className="cat-logo"
            />
            <h1 onClick={handleRefresh} style={{ cursor: "pointer" }}>
              gitjobs
            </h1>
          </div>
        </header>
        <main>
          <JobBoard />
        </main>
        <footer>Made by Greg Ogun</footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
