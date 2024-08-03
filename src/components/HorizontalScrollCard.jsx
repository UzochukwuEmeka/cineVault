import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const HorizontalScrollCard = ({ data = [], heading ,trending,media_type}) => {
  const containerRef = useRef();

  const handelNext = () => {
    containerRef.current.scrollLeft += 400;
  };
  const handlePrev = () => {
    containerRef.current.scrollLeft -= 400;
  };
  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3">{heading}</h2>
      <div className="relative">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 grid-flow-col overflow-hidden overflow-x-scroll z-10  relative scroll-smooth transition-all scrollbar-none"
        >
          {data.map((data, index) => {
            return (
              <Card key={data.id} data={data} index={index} trending={trending} media_type={media_type} />
            );
          })}
        </div>
        <div className=" absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrev}
            className="bg-white p-1 text-black rounded-full -ml-2 z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handelNext}
            className="bg-white p-1 text-black rounded-full -mr-2 z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
