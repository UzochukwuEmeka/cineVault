import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(endPoint);
      setLoading(false);
      return setData(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return { data, loading };
};

export default useFetch;
