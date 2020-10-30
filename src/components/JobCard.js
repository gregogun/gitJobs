import React from "react";
import "../styles/index.css";

const JobCard = ({
  id,
  created_at,
  type,
  title,
  company,
  location,
  handleClick,
  company_logo,
  setJobIndex,
}) => {
  const handleOpen = () => {
    handleClick();
    setJobIndex(id);
  };

  const created = created_at.slice(4, 10);
  const alt = `${company} company logo`;

  return (
    <li className="JobCard">
      <img
        src={company_logo}
        alt={alt}
        style={{ width: 64, height: 64, objectFit: "cover" }}
      />
      <div className="created-type">
        <p>{created}</p>
        <div className="created-type-divider"></div>
        <p> {type}</p>
      </div>
      <h2 onClick={handleOpen}>
        <a href="#" className="job-title">
          {title}
        </a>
      </h2>
      <p className="job-company">{company}</p>
      <p className="job-location">{location}</p>
    </li>
  );
};

export default JobCard;
