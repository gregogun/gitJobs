import React from "react";
import MainDetails from "./MainDetails";
import TitleDetails from "./TitleDetails";
import { MdKeyboardBackspace } from "react-icons/md";
import "../styles/index.css";

const JobDetails = ({ index, handleShow, job, logo }) => {
  const handleClick = () => {
    handleShow(job.id);
  };

  return (
    <>
      <MdKeyboardBackspace className="back-icon" onClick={handleClick} />
      <TitleDetails {...job} logo={logo} />
      <MainDetails {...job} />
    </>
  );
};

export default JobDetails;
