import React from "react";

const JobDetails = ({ index, handleShow, job }) => {
  const handleClick = () => {
    handleShow();
  };

  return (
    <div className="JobDetails">
      <h1>{job.title}</h1>
      <p
        onClick={handleClick}
        style={{ color: "lightseagreen", cursor: "pointer" }}
      >
        GO BACK?
      </p>
      <p
        onClick={() => handleShow(index)}
        style={{ color: "skyblue", cursor: "pointer" }}
      >
        NEXT
      </p>
    </div>
  );
};

export default JobDetails;
