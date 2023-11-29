import React from "react";
import team from "../Images/team.png";
import {
  DirectorGBPIET,
  FacultyData,
  HeadData,
  
} from "../data/facultyData";
import "../data/fonts.css";

const AboutPage = () => {
  return (
    <div className="text-center text-white">
      <h1
        className="py-5 text-xl white text-font-medium md:text-6xl"
        style={{ fontFamily: "Syne" }}
      >
        About{" "}
        <span
          className="text-2xl text-yellow-500 md:text-7xl"
          style={{ fontFamily: "Syne" }}
        >
          SPANDAN
        </span>
      </h1>
      <div className="text-sm md:text-2xl">
        <p
          className="mt-1 font-normal md:font-medium md:mt-5"
          style={{ fontFamily: "spacemono" }}
        >
          Welcome to SPANDAN-2023, the pinnacle of technological innovation
          brought to you by GBPIET's Student Activity Cell. As a beacon of
          cutting-edge advancements, this festival transcends mere celebration;
          it's an immersive journey into the pulsating realm of technology.
        </p>
        <p
          className="mt-5 font-normal md:font-medium "
          style={{ fontFamily: "spacemono" }}
        >
          Brace yourself for a riveting showcase featuring epic robo battles,
          adrenaline-fueled hackathons, and the exhilarating spectacle of robo
          soccer. Dive into the intricate challenges of our line-following robot
          tracks, designed to push the boundaries of precision and ingenuity.
        </p>
        <p
          className="mt-5 font-normal md:font-medium"
          style={{ fontFamily: "spacemono" }}
        >
          2023 beckons you to partake in an unparalleled technological odyssey,
          where imagination finds flight, competitiveness thrives, and
          creativity knows no limits. Join us for an unforgettable exploration
          into the future of technology, marking your calendars for an
          experience that promises to redefine boundaries and leave an indelible
          mark on your technological journey.
        </p>
      </div>
      <div className="mt-10">
        {DirectorGBPIET.map((item) => (
          <div key={item.id} className="flex flex-col justify-center">
            <div className="flex justify-center">
              <img
                src={item.img}
                alt="director image"
                className="w-48 border-4 border-yellow-400 rounded-full"
              />
            </div>
            <p
              style={{ fontFamily: "spacemono" }}
              className="text-xl font-semibold"
            >
              {item.name}
            </p>
            <p
              style={{ fontFamily: "spacemono" }}
              className="text-xl font-semibold"
            >
              {" "}
              {item.position}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xl" style={{ fontFamily: "spacemono" }}>
        It is my great privilege to welcome you to the Govind Ballabh Pant
        Institute of Engineering & Technology, Pauri Garhwal and invite you to
        explore the multidimensional facets of this Engineering Institute using
        the official website. The Institute has already marked its presence as a
        leading research and teaching institute in the country. Its strengths
        and standing are best evidenced by the high quality of the students
        admitted in various programs and well qualified faculty.
      </p>
      <h2
        className="mt-10 text-xl font-semibold md:mt-20 md:text-6xl"
        style={{ fontFamily: "Syne" }}
      >
        OUR TEAM
      </h2>
      <div className="flex justify-center">
        <img src={team} className="sm:w-96" />
      </div>
      <div className="grid grid-cols-2 mt-10 sm:grid-cols-3 gap-x-5 md:grid lg:grid-cols-3 lg:gap-x-56 lg:px-20">
        {FacultyData.map((item) => (
          <div key={item.id} className="">
            <img
              src={item.img}
              className="border-4 border-yellow-400 rounded-3xl"
            />
            <div className="flex justify-center">
              <div className="relative px-2 text-xs font-medium bg-white rounded sm:bottom-16 bottom-10 sm:text-lg lg:text-xl bg-opacity-20 backdrop-blur-lg drop-shadow-lg w-fit">
                <p style={{ fontFamily: "Syne" }}>{item.name}</p>
                <p style={{ fontFamily: "Syne" }}>{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="mb-2 text-3xl font-semibold text-left md:text-3xl md:my-10">
          HEADS
        </h2>
        <div className="grid grid-cols-2 mt-10 sm:grid-cols-3 gap-x-5 md:grid lg:grid-cols-4 lg:gap-10">
          {HeadData.map((item) => (
            <div key={item.id} className="">
              <img
                src={item.img}
                className="border-4 border-yellow-400 rounded-3xl"
              />
              <div className="flex justify-center">
                <div className="relative text-xs font-medium bg-white rounded bottom-10 sm:bottom-16 sm:text-lg lg:text-xl bg-opacity-20 backdrop-blur-lg drop-shadow-lg w-fit">
                  <p style={{ fontFamily: "Syne" }}>{item.name}</p>
                  <p style={{ fontFamily: "Syne" }}>{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <h2
          className="mb-2 text-3xl font-semibold text-left md:text-3xl md:my-10"
          style={{ fontFamily: "Syne" }}
        >
          TEAM HEADS
        </h2>
        <div className="grid grid-cols-2 mt-10 sm:grid-cols-3 gap-x-5 md:grid lg:grid-cols-4 lg:gap-x-10">
          {ManagerData.map((item) => (
            <div key={item.id} className="">
              <img
                src={item.img}
                className="border-4 border-yellow-400 rounded-3xl"
              />
              <div className="flex justify-center">
                <div className="relative px-2 text-xs font-medium bg-white rounded sm:bottom-16 bottom-10 sm:text-lg lg:text-xl bg-opacity-20 backdrop-blur-lg drop-shadow-lg w-fit">
                  <p style={{ fontFamily: "Syne" }}>{item.name}</p>
                  <p style={{ fontFamily: "Syne" }}>{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;
