import { useEffect, useState } from "react";

const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`;
  const [ids, setIds] = useState({});
  const [descState, setDescState] = useState("");
  const [locState, setLocState] = useState("");
  const [isFullState, setIsFullState] = useState("");
  // const [trigger, setTrigger] = useState(false);

  const getIds = () => {
    // make a dictionary of ids -> indexes in data
    let ids = {};
    jobs.forEach((info, i) => {
      ids[info["id"]] = i;
    });
    setIds(ids);
    console.log(ids);
  };

  let urlCopy = url;
  let desc = "";
  let loc = "";
  let isFull = "";

  const fetchData = () => {
    urlCopy += `description=${desc}&location=${loc}&full_time=${isFull}&page=${page}`;

    console.log("fetchData is here", urlCopy);

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
      }, getIds)
      .catch((e) => console.log(e));
  };

  const queryJobs = (query) => {
    const { description, location, isFullTimeOnly } = query;

    desc = description;
    loc = location;
    isFull = isFullTimeOnly;

    // console.log(desc);

    setDescState(desc);
    setLocState(loc);
    setIsFullState(isFull);
    setPage(1);
    urlCopy += `description=${desc}&location=${loc}&full_time=${isFull}&page=${1}`;

    console.log("queryJobs is here", urlCopy);

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
      }, getIds)
      .catch((e) => console.log(e));
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);

    urlCopy += `description=${descState}&location=${locState}&full_time=${isFullState}&page=${nextPage}`;

    console.log("loadMore is here", urlCopy);

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
        if (data.length > 0) {
          setJobs(jobs.concat(data));
        }
        // console.log("new jobs were added", data);
      }, getIds)
      .catch((e) => console.log(e));
  };

  useEffect(fetchData, []);

  // useEffect(getIds, [trigger]);

  return { jobs, ids, isLoading, queryJobs, fetchData, loadMore };
};

export default useFetch;
