import React from "react";
import "../styles/index.css";
import Button from "../styled_comps/Button";

const MainDetails = ({
  created_at,
  type,
  title,
  location,
  description,
  how_to_apply,
  url,
}) => {
  const created = created_at.slice(4, 10);

  return (
    <div className="MainDetails">
      <div className="created-type">
        <p>{created}</p>
        <div className="created-type-divider"></div>
        <p> {type}</p>
      </div>
      <p className="job-title">{title}</p>
      <p className="job-location">{location}</p>
      <p className="job-description">
        {description.replace(/<\/?[^>]+>/gi, "")}
      </p>
      <form action={url} target="_blank" method="get">
        <Button>Apply Now</Button>
      </form>
    </div>
  );
};

export default MainDetails;
