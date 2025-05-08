import React, { useRef, useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer text-sm mt-2">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => {
          onChange(e.target.checked, label);
        }}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer text-sm mt-2">
      <input
        type="radio"
        checked={selected}
        name="sortOption"
        onChange={() => {
          onChange(label);
        }}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);

  const roomType = [
    "Single Room",
    "Double Room",
    "Family Suite",
    "Deluxe Room",
  ];
  const priceRange = ["0 to 500", "500 to 1000", "1000 to 2000", "2000+"];
  const sortOptions = [
    "price low to high",
    "price high to low",
    "rating ",
    "Newest first ",
  ];

  return (
    <div
      className="flex flex-col-reverse lg:flex-row items-center
justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24
xl:px-32"
    >
      <div>
        <div>
          <h1 className="font-playfair text-4x1 md:text-[40px] ">
            Hotel Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>
        <div>
          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              className="flex flex-col  md:flex-row items-start gap-6 py-10 border-b border-gray-300  last:pb-30 last:border-0 "
            >
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                src={room.images[0]}
                alt="hotel-img"
                title={"view room details"}
                className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
              />
              <div className="md:w-1/2 flex flex-col gap-2">
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  className="text-gray-800 font-playfair text-3xl cursor-pointer"
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                  }}
                >
                  {room.hotel.name}
                </p>
                <div className="flex  items-center">
                  <StarRating />
                  <p className="ml-2">200+ review</p>
                </div>
                <div className="flex items-center gap-1 text-gray-500 mt-2   text-sm">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{room.hotel.address}</span>
                </div>
                {/* {room-amentities} */}
                <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                  {room.amenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5ff]/80"
                    >
                      <img
                        src={facilityIcons[item]}
                        alt={item}
                        className="w-5 h-5"
                      />
                      <p className="text-xs">{item}</p>
                    </div>
                  ))}
                </div>
                {/* {Room Prices} */}
                <p className="text-xl font-medium text-gray-700">
                  {" "}
                  ${room.pricePerNight}/night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {Filter} */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 lg:fixed lg:top-10 lg:right-15 rounded-lg shadow-lg ">
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${
            openFilter && "border-b"
          } `}
        >
          <p className="font-medium text-gray-800 text-base">FILTER</p>
          <div
            onClick={() => setOpenFilter(!openFilter)}
            className="text-xs cursor-pointer"
          >
            <span className="lg:hidden">{openFilter ? "HIDE" : "SHOW"}</span>
            <span className="max-lg:hidden ">
              <img
                onClick={() => setOpenFilter(false)}
                src={assets.closeUp}
                alt="close-icon"
                className={` w-4 text-gray-500 cursor-pointer ${
                  !openFilter && "rotate-180 "
                } transition-all duration-500`}
              />
            </span>
          </div>
        </div>
        <div
          className={`${
            openFilter ? "h-auto lg:h-100" : "h-0 "
          } overflow-hidden lg:overflow-y-scroll  transition-all duration-700 `}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filter</p>

            {roomType.map((item, index) => (
              <CheckBox key={index} label={item} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRange.map((range, index) => (
              <CheckBox key={index} label={`$ ${range}`} />
            ))}
          </div>
          <div className="px-5 py-5 ">
            <p className="font-medium text-gray-800 pb-2">Sort</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
          <div className="relative pt-3 ">
            <img
              onClick={() => setOpenFilter(false)}
              src={assets.closeUp}
              alt="close-icon"
              className="absolute bottom-3 right-4 w-4 text-gray-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllRooms;
