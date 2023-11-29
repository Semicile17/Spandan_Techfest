import React from "react";

import bg2 from "../../Images/homeImages/homepage_bg2.png";
import line from "../../Images/homeImages/line.jpeg";
import "../../data/fonts.css";

function Box({ heading, extraHeading, data ,key}) {
  const backgroundStyle = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
  };
  

  return (
    <div
      style={backgroundStyle}
      className={`flex items-center gap-1 py-5 mx-5 my-5 md:h-36 ${key%2===0 ? "flex-row-reverse" : "flex-row"}` }
    >
      <div className="text-center w-fit sm:w-1/3">
        <div
          className="pl-1 text-lg font-bold text-yellow-500 md:text-3xl"
          style={{ fontFamily: "Syne" }}
        >
          {heading}
        </div>
        <div
          className="text-sm font-bold text-white md:text-2xl"
          style={{ fontFamily: "Syne" }}
        >
          {extraHeading}
        </div>
      </div>
      <div className="flex items-center justify-center w-1/10">
        <div className="h-full border-l border-white">
          <img src={line} className="h-24" alt="line" />
        </div>
      </div>
      <div
        className="w-10/12 py-4 text-xs text-white whitespace-normal sm:px-5 md:text-base"
        style={{ fontFamily: "spacemono" }}
      >
        {data}
      </div>
    </div>
  );
}

export default Box;
