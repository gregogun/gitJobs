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
}) => {
  return (
    <>
      <p>{created}</p>
      <p>{type}</p>
      <p
        onClick={handleClick}
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
