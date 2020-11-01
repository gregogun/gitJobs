import React, { useState } from "react";
import JobCard from "./JobCard";
import useFetch from "../hooks/useFetch";
import SearchFilter from "./SearchFilter";
import JobDetails from "./JobDetails";
import JobLogos from "./JobLogos";
import Button from "../styled_comps/Button";
import "../styles/index.css";

const JobBoard = () => {
  const { jobs, ids, isLoading, queryJobs, loadMore } = useFetch();
  const [modal, setModal] = useState(false);
  const [jobIndex, setJobIndex] = useState();
  const [logoName, setLogoName] = useState();

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
        const logo = JobLogos.filter((item) => item.name === logoName);
        return (
          <div className="JobDetails">
            {
              <JobDetails
                random={random}
                logo={logo[0]}
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
        {jobs && !isLoading ? (
          <p className="showing-jobs">Showing {jobs.length} jobs</p>
        ) : (
          <p className="showing-jobs">Loading...</p>
        )}
        {!isLoading && jobs.length >= 50 && (
          <Button onClick={loadMore}>Load More</Button>
        )}
        {!isLoading && jobs.length === 0 && (
          <p>
            We can't find any jobs to match your search. Please enter a
            different search term or location.
          </p>
        )}
        <ul className="JobBoard">
          {jobs &&
            jobs.map((item) => (
              <JobCard
                key={item.id}
                {...item}
                setLogoName={setLogoName}
                handleClick={handleClick}
                setJobIndex={setJobIndex}
              />
            ))}
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
