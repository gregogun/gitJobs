import React, { useState } from "react";
import JobCard from "./JobCard";
import useFetch from "../../hooks/useFetch";
import "../main/JobBoard.css";

const JobBoard = () => {
  const { jobs, isLoading, fetchData, loadMore } = useFetch();

  return (
    <>
      <div className="JobBoard">
        {jobs &&
          jobs.map((item) => (
            <div className="JobCard" key={item.id}>
              <JobCard {...item} />
            </div>
          ))}
      </div>
      <button className="load-button" onClick={loadMore}>
      Load More
    </button>
    </>
  );
};

export default JobBoard;
