import React from "react";
import './JobCard.css';

const JobCard = ({ id, created, type, title, company, location }) => {
    return (
        <>
            <p>{created}</p>
            <p>{type}</p>
            <p>{title}</p>
            <p>{company}</p>
            <p>{location}</p>
        </>
    )
}

export default JobCard;