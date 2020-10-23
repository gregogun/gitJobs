import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([""]);

  useEffect(() => {
    const getJobs = async () => {
      const response = await fetch(url);

      if (response.status !== 200) {
        throw new Error("cannot fetch data");
      } 
      const data = await response.json();
      const allJobs = data;
      setData(allJobs);
    };
    getJobs();
  }, [url]);

  return { data };
};

export default useFetch;
