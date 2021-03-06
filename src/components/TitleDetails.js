import React from "react";
import "../styles/index.css";
import Button from "../styled_comps/Button";

const TitleDetails = ({ company, company_url, company_logo, logo }) => {
  const alt = ` The ${company} company logo`;

  return (
    <div className="TitleDetails">
      <div className="job-logo-wrapper wrapper-bigger">
        <img src={logo.name} alt={alt} className="job-logo logo-bigger" />
      </div>
      <div className="company-title-wrapper">
        <h2>{company}</h2>
      </div>
      <div className="company-site-button-wrapper">
        <form action={company_url} target="_blank" method="get">
          <Button>Company Site</Button>
        </form>
      </div>
    </div>
  );
};

export default TitleDetails;
