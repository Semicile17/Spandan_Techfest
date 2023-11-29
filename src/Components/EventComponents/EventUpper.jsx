import React from "react";
import Ecllips1 from "../../Images/homeImages/Ellipse_1.png";
import Ecllips2 from "../../Images/Ellipse_1new.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
const EventUpper = () => {
  return (
    <div className="bg-[#002046] px-0.5">
      <div className="flex items-end justify-between ">
        <div className="justify-end mt-24 text-white">
          <h1 className=" text-2xl md:text-6xl font-medium leading-[19px]" style={{fontFamily :"Syne"}}>
            Explore all your{" "}
            <span className="text-3xl font-semibold text-yellow-500 md:text-7xl" style={{fontFamily :"Syne"}}>
              SPANDAN{" "}
            </span>
          </h1>
          <h1 className="text-2xl md:text-6xl font-medium leading-[19px]" style={{fontFamily :"Syne"}}>
            Event at One place.
          </h1>
        </div>
        <div className="flex p-0">
          <img
            src={Ecllips1}
            alt=""
            className="h-[70px] md:h-40 transform rotate-180 m-0"
          />
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-end opacity">
            <img src={Ecllips2} className="h-[70px] md:h-48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventUpper;
