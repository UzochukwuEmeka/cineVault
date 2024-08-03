import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDetail = (endPoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(endPoint);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [endPoint]);

  return { data, loading };
};

export default useFetchDetail;
