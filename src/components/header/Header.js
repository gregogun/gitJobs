import React from "react";

const Header = () => {
  const handleRefresh = () => {
    window.location.reload(false);
  };

  return (
    <div className="Header">
      <h1 onClick={handleRefresh} style={{ cursor: "pointer" }}>
        gitJobs
      </h1>
    </div>
  );
};

export default Header;
