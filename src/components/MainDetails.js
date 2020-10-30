import React from "react";
import "../styles/index.css";

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
      <p>{created}</p>
      <p>{type}</p>
      <p>{title}</p>
      <p>{location}</p>
      <p>{description.replace(/<\/?[^>]+>/gi, "")}</p>
    </div>
  );
};

export default MainDetails;
