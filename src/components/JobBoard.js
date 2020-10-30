import React, { useState } from "react";
import JobCard from "./JobCard";
import useFetch from "../hooks/useFetch";
import SearchFilter from "./SearchFilter";
import JobDetails from "./JobDetails";
import Button from "../styled_comps/Button";
import "../styles/index.css";

const JobBoard = () => {
  const { jobs, ids, isLoading, queryJobs, loadMore } = useFetch();
  const [modal, setModal] = useState(false);
  const [jobIndex, setJobIndex] = useState();

  const handleClick = () => {
    setModal(true);
  };

  const RenderModal = () => {
    const handleShow = (id) => {
      console.log("here");
      const size = ids.length;
      if (typeof id === "number") {
        setJobIndex(id + 1 < size ? id + 1 : id);
      } else {
        const id = jobs.map((item) => item.id);
        setModal(false);
        setJobIndex(ids[id]);
      }
    };

    if (modal) {
      if (jobs) {
        const jobsId = jobs.filter((job) => job.id === jobIndex);
        // above is for real data
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
      <>
        <SearchFilter onSearch={queryJobs} />
        {jobs && <p className="showing-jobs">Showing {jobs.length} jobs</p>}
        {!isLoading && jobs.length >= 50 && (
          // <button className="load-button" onClick={loadMore}>
          //   Load More
          // </button>
          <Button onClick={loadMore}>Load More</Button>
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading && jobs.length === 0 && (
          <p>
            We can't find any jobs to match your search. Please enter a
            different search term or location.
          </p>
        )}
        <ul className="JobBoard">
          {
            jobs &&
              jobs.map((item) => (
                <JobCard
                  key={item.id}
                  {...item}
                  handleClick={handleClick}
                  RenderModal={RenderModal}
                  jobIndex={jobIndex}
                  setJobIndex={setJobIndex}
                />
              ))
            // <h2>
            //   Sorry there an issue which means we can't find any jobs for you{" "}
            //   <span role="img" aria-label="sad">
            //     😔
            //   </span>
            // </h2>
          }
        </ul>
        {!isLoading && jobs.length >= 50 && (
          <Button onClick={loadMore}>Load More</Button>
        )}
      </>
    );
  };

  return modal ? <RenderModal /> : <RenderBoard />;
};

export default JobBoard;
