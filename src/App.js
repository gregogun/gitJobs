import React from "react";
import "./styles/index.css";
import styled, { ThemeProvider } from "styled-components";
import JobBoard from "./components/JobBoard";

const theme = {
  primary_red: "#f31e1e",
  primary_lightred: "#e95252",
  primary_grey: "#5c5c5c",
  primary_coal: "#303030",
};

function App() {
  const handleRefresh = () => {
    window.location.reload(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <h1 onClick={handleRefresh} style={{ cursor: "pointer" }}>
            gitjobs
          </h1>
        </header>
        <main>
          <JobBoard />
        </main>
        <footer>
          Made with <span>🤍</span> by Greg Ogun
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
