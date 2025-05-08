import React, { useEffect, useState } from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./Hotelcard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();
  return (
    <div className={`flex flex-col items-center px-6   py-20 bg-slate-50   `}>
      <Title
        title=" Featured Destination"
        subTitle="Discover our handpicked
selection of exceptional properties around the world, offering unparalleled
luxury and unforgettable experiences. "
      />
      <div className="flex flex-wrap items-center justify-between gap-6 mt-20 ">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300
 rounded-tl-[10px] rounded-br-[10px] hover:scale-x-110 hover:shadow-[0px_4px_4px_rgba(0,0,0,0.5)] bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
