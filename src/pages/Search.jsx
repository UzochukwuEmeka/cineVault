import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Search = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const query = location.search.slice(3);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get("/search/multi", {
        params: {
          query: query,
          page: pageNo,
          include_adult: true,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (err) {
      console, log(err);
    }
  };

  useEffect(() => {
    if (query) {
      setPageNo(1);
      setData([]);
      fetchData();
    }
  }, [location?.search]);

  const handelScroll = () => {
    if (window.innerHeight + window.screenY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  return (
    <div className="py-16">
      <div className="lg:hidden my-2 mx-1 sticky top-[70px] z-30">
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split("%20")?.join(" ")}
          className="px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900 "
        />
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "search"}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
