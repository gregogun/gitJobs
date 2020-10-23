import React, { useState } from "react";
import JobCard from "./JobCard";
import useFetch from "../../hooks/useFetch";
import "../main/JobBoard.css";

const JobBoard = () => {
  const { data } = useFetch(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
  );
  const [visible, setVisible] = useState(12);

  const loadMore = num => {
    if (num > 48) {
      setVisible(num + 12);
    }
  };

  return (
    <div className="JobBoard">
      {data !== "" &&
        data
          .slice(0, visible)
          .map((item) => (
            <JobCard
              className="JobCard"
              created={item.created_at}
              type={item.type}
              title={item.title}
              company={item.company}
              location={item.location}
              key={item.id}
            />
          ))}
      <button className="load-button" onClick={() => loadMore(visible)}>Load More</button>
    </div>
  );
};

export default JobBoard;
