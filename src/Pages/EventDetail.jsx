import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Eventdata } from "../data/eventData";

const EventDetail = () => {
  const data = useLocation();

  const eventDetail = data.state.events;

  return (
    <div className="text-white h-fit bg-[#D9D9D91A] px-3 py-3 flex flex-col lg:flex-row lg:gap-5">
      <div className="w-full h-[275px] sm:h-[350px]  md:h-[400px] lg:h-[450px] xl:h-[570px]  lg:w-1/2">
        <img
          className="object-cover w-full h-full rounded-3xl "
          alt="event image"
          src={eventDetail.image}
        />
      </div>
      <div className="mt-54 lg:w-1/2">
        <div className="flex items-center justify-between mt-5">
          <h1
            className="w-2/3 text-2xl font-medium lg:w-full lg:text-4xl sm:text-3xl md:text-4xl xl:text-5xl"
            style={{ fontFamily: "Syne" }}
          >
            {eventDetail.name}
          </h1>
          <span className="relative flex items-center justify-center px-2 sm:px-5 py-0 overflow-hidden text-xl font-normal leading-none bg-white rounded-md cursor-pointer h-11 w-max text-slate-700  before:absolute before:left-0 before:w-full before:h-full before:bg-yellow-400 before:z-[0] before:translate-x-[-100%] hover:before:translate-x-[0] before:transition-all before:duration-300 sm:mr-5 ">
            <a
              href={eventDetail.link}
              download={eventDetail.name}
              target="_blank"
              className="relative z-[1] transition-all duration-500 "
            >
              RuleBook
            </a>
          </span>
        </div>

        <p className="text-lg font-light " style={{ fontFamily: "spacemono" }}>
          {eventDetail.desc}
        </p>
        <h2
          className="text-3xl text-center lg:font-medium lg:text-4xl"
          style={{ fontFamily: "Syne" }}
        >
          Entry and Prize
        </h2>
        <p className="text-lg text-center" style={{ fontFamily: "Syne" }}>
          {eventDetail.category}
        </p>
        <div>
          <div className="flex items-center">
            <p
              className="text-lg lg:text-2xl"
              style={{ fontFamily: "michroma" }}
            >
              Entry Price:
            </p>
            <p
              style={{ fontFamily: "michroma" }}
              className="text-md lg:text-xl"
            >
              Rs {eventDetail.branchEntry}
            </p>
          </div>
          <div className="flex items-end">
            <p
              className="text-lg lg:text-2xl"
              style={{ fontFamily: "michroma" }}
            >
              Winner :{" "}
            </p>
            <p
              style={{ fontFamily: "michroma" }}
              className="text-md lg:text-xl"
            >
              Rs {eventDetail.branchFirst}
            </p>
          </div>
          <div className="flex items-end">
            <p
              className="text-lg lg:text-2xl"
              style={{ fontFamily: "michroma" }}
            >
              Runner Up :{"  "}
            </p>
            <p
              style={{ fontFamily: "michroma" }}
              className="text-md lg:text-xl"
            >
              Rs {eventDetail.branchSecond}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-xl">For Any Queries , Please Contact :</p>
          <p className="text-lg">Coordinator : {eventDetail.CordinateName}</p>
          <p className="text-lg">Mobile No : {eventDetail.CordinateNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
