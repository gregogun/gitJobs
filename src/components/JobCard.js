import React from "react";
import JobLogos from "./JobLogos";
import "../styles/index.css";

const JobCard = ({
  id,
  created_at,
  type,
  title,
  company,
  location,
  handleClick,
  setJobIndex,
  setLogoName,
}) => {
  const handleOpen = () => {
    handleClick();
    setJobIndex(id);
    setLogoName(logo[random]);
  };

  const shuffle = (array) => {
    let counter = array.length;
    let temp;
    let index;

    if (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return index;
  };

  const random = shuffle(JobLogos);

  const created = created_at.slice(4, 10);
  const alt = `${company} company logo`;

  const logo = JobLogos.map((logo) => logo.name);

  return (
    <li className="JobCard">
      <div className="job-logo-wrapper">
        <img src={logo[random]} alt={alt} className="job-logo" />
      </div>
      <div className="created-type">
        <p>{created}</p>
        <div className="created-type-divider"></div>
        <p> {type}</p>
      </div>
      <h2 onClick={handleOpen}>
        <a href="#0" className="job-title">
          {title}
        </a>
      </h2>
      <p className="job-company">{company}</p>
      <p className="job-location">{location}</p>
    </li>
  );
};

export default JobCard;
