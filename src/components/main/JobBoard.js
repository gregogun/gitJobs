import React, { useState } from "react";
import JobCard from "./JobCard";
import useFetch from "../../hooks/useFetch";
import SearchFilter from "./SearchFilter";
import JobDetails from "./JobDetails";
import "../main/JobBoard.css";

const JobBoard = () => {
  const { jobs, ids, isLoading, queryJobs, loadMore } = useFetch();
  const [modal, setModal] = useState(false);
  const [jobIndex, setJobIndex] = useState();

  const handleClick = () => {
    setModal(true);
  };

  const RenderModal = () => {
    const handleShow = (id) => {
      const size = Object.keys(ids).length;
      if (typeof id === "number") {
        setJobIndex(id + 1 < size ? id + 1 : id);
      } else {
        setModal(false);
        setJobIndex(ids[id]);
      }
    };

    if (modal) {
      if (jobs) {
        const jobsId = jobs.filter((job) => job.id === jobIndex);
        console.log(jobsId[0]);
        return (
          <div>
            {
              <JobDetails
                index={jobIndex}
                handleShow={handleShow}
                job={jobsId[0]}
              />
            }
          </div>
        );
      }
    }
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
                <JobCard
                  {...item}
                  handleClick={handleClick}
                  RenderModal={RenderModal}
                  jobIndex={jobIndex}
                  setJobIndex={setJobIndex}
                />
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

  return modal ? <RenderModal /> : <RenderBoard />;
};

export default JobBoard;
