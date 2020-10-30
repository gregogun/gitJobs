import React from "react";
import "../styles/index.css";

const TitleDetails = ({ title, company, company_url, company_logo }) => {
  const alt = ` The ${company} company logo`;

  return (
    <div>
      <h1>{title}</h1>
      <p>{company_url}</p>
      <img src={company_logo} alt={alt} />
    </div>
  );
};

export default TitleDetails;
