import React from "react";
import MainDetails from "./MainDetails";
import TitleDetails from "./TitleDetails";
import "../styles/index.css";

const JobDetails = ({ index, handleShow, job }) => {
  const handleClick = () => {
    handleShow(job.id);
  };

  return (
    <div className="JobDetails">
      <TitleDetails {...job} />
      <MainDetails {...job} />
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
