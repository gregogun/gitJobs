import React, { useState } from "react";

const JobDetails = ({ setModal, jobs, job, ind }) => {
  const handleClick = () => {
    setModal(false);
  };

  return (
    <div className="JobDetails">
      <p
        onClick={handleClick}
        style={{ color: "lightseagreen", cursor: "pointer" }}
      >
        GO BACK?
      </p>
    </div>
  );
};

export default JobDetails;
