import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const BannerHome = () => {
  const bannerData = useSelector((state) => state.cineVaultData.bannerData);
  const imgUrl = useSelector((state) => state.cineVaultData.imgURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerData, imgUrl,currentImage]);
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div
              className="lg:min-h-full min-w-full min-h-[450px] overflow-hidden relative group transition-all"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
              key={data.id + "bannerHome" + index}
            >
              <div className="w-full h-full">
                <img
                  src={imgUrl + data.backdrop_path}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute top-0 w-full h-full hidden  items-center justify-between px-4 group-hover:lg:flex">
                <button
                  className="bg-white p-1 rounded-full text-xl z-10 text-black"
                  onClick={handlePrev}
                >
                  <FaAngleLeft />
                </button>
                <button
                  className="bg-white p-1 rounded-full text-xl z-10 text-black"
                  onClick={handleNext}
                >
                  <FaAngleRight />
                </button>
              </div>
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container  mx-auto">
                <div className=" absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                    {data?.title || data?.name}{" "}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="">
                      Rating:{Number(data.vote_average).toFixed(1)}
                    </p>
                    <span>|</span>
                    <p>View:{Number(data.popularity).toFixed(0)}</p>
                  </div>
                  <button className="px-4 py-2 text-black font-bold rounded mt-4 bg-white hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105 ">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
