import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const trendingData = useSelector((state) => state.cineVaultData.bannerData);

  const { data: nowPlaying } = useFetch("/movie/now_playing");
  const { data: topRated } = useFetch("/movie/top_rated");
  const { data: popularTvShowData } = useFetch("/tv/popular");
  const { data: upComing } = useFetch("/movie/upcoming");
  const { data: onAir } = useFetch("/tv/on_the_air");



  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingData}
        heading={"Trending Show"}
        trending={true}
      />
      <HorizontalScrollCard data={nowPlaying} heading={"Now Playing"} media_type={"movie"} />
      <HorizontalScrollCard data={upComing} heading={"Up Coming"} media_type={"movie"} />
      <HorizontalScrollCard data={topRated} heading={"Top Rated"} media_type={"movie"} />

      <HorizontalScrollCard data={popularTvShowData} heading={"Popular"} media_type={"tv"} />
      <HorizontalScrollCard data={onAir} heading={"On Air"} media_type={"tv"} />


    </div>
  );
};

export default Home;
