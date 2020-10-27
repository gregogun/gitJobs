import React, { useState } from "react";
import JobCard from "./JobCard";
import useFetch from "../../hooks/useFetch";
import SearchFilter from "./SearchFilter";
import JobDetails from "./JobDetails";
import "../main/JobBoard.css";

const JobBoard = () => {
  const { jobs, ids, isLoading, queryJobs, loadMore } = useFetch();
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };

  const RenderBoard = () => {
    return (
      <div>
        <SearchFilter onSearch={queryJobs} />
        <p>Showing {jobs.length} jobs</p>
        {!isLoading && jobs.length >= 50 && (
          <button className="load-button" onClick={loadMore}>
            Load More
          </button>
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading && jobs.length === 0 && (
          <p>
            We can't find any jobs to match your search. Please enter a
            different search term or location.
          </p>
        )}
        <div className="JobBoard">
          {jobs &&
            jobs.map((item) => (
              <div className="JobCard" key={item.id}>
                <JobCard {...item} handleClick={handleClick} />
              </div>
            ))}
        </div>
        {!isLoading && jobs.length >= 50 && (
          <button className="load-button" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    );
  };

  // console.log(pageNum);

  return modal ? (
    <JobDetails jobs={jobs} setModal={setModal} />
  ) : (
    <RenderBoard />
  );
};

export default JobBoard;
