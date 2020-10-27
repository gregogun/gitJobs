import React from "react";
import "./JobCard.css";

const JobCard = ({
  id,
  created,
  type,
  title,
  company,
  location,
  handleClick,
  jobIndex,
  setJobIndex,
}) => {
  const handleOpen = () => {
    handleClick();
    setJobIndex(id);
  };

  return (
    <>
      <p>{created}</p>
      <p>{type}</p>
      <p
        onClick={handleOpen}
        style={{ color: "lightseagreen", cursor: "pointer" }}
      >
        {title}
      </p>
      <p>{company}</p>
      <p>{location}</p>
    </>
  );
};

export default JobCard;
