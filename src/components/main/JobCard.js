import React from "react";
import './JobCard.css';

const JobCard = ({ id, created, type, title, company, location }) => {
    return (
        <div className="JobCard">
            <p>{created}</p>
            <p>{type}</p>
            <p>{title}</p>
            <p>{company}</p>
            <p>{location}</p>
        </div>
    )
}

export default JobCard;