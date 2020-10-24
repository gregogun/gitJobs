import { useEffect, useState } from "react";

const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`;

  const fetchData = (query) => {
    let urlCopy = url;

    if (query) {
      const { description, location, isFullTimeOnly, pageNum } = query;

      if (description) urlCopy += `description=${description}&`;
      if (location) urlCopy += `location=${location}&`;
      // check below line to see if this is correct
      if (isFullTimeOnly) urlCopy += `full_time=${description}&`;

      urlCopy += `page=${pageNum}&`;

      setIsLoading(true);

      const getJobs = async () => {
        const response = await fetch(urlCopy);

        if (response.status !== 200) {
          throw new Error("cannot fetch data");
        }

        const data = await response.json();

        return data;
      };

      getJobs()
      .then((data) => {
        setIsLoading(false);
        setJobs(data);
      });
    } else {
      urlCopy = `${urlCopy}page=${page}`;
      setIsLoading(true);

      const getJobs = async () => {
        const response = await fetch(urlCopy);

        if (response.status !== 200) {
          throw new Error("cannot fetch data");
        }

        const data = await response.json();

        return data;
      };

      getJobs().then((data) => {
        setIsLoading(false);
        setJobs(jobs.concat(data));
        console.log('new jobs were added', data);
      });

    }
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(fetchData, [page]);

  return { jobs, isLoading, fetchData, loadMore };
};

export default useFetch;
