import React,{useEffect} from "react";
import background1 from "../../Images/homeImages/homepage-bg.png";
import down from "../../Images/homeImages/arrowdown.png";
import "../../data/fonts.css";
import { Link, useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Registerpage() {
  const style = {
    backgroundImage: `url(${background1})`,
    backgroundSize: "cover",
  };
useEffect(() => {
  Aos.init({ duration: 2000 });
}, []);
  return (
    <>
      <div style={style} className="flex flex-col items-center justify-center ">
        <div
          className="flex justify-center sm:space-x-3 mt-20 sm:tracking-[0.4em] tracking-[0.6em] text-white  lg:text-9xl md:text-8xl sm:text-7xl text-3xl lg:my-3 xl:mt-[120px] sm:pl-6 pl-3"
          style={{ fontFamily: "nasa" }}
        >
          <p className="w-fit" data-aos="fade-right">
            S
          </p>
          <p className="w-fit" data-aos="fade-right">
            P
          </p>
          <p className="w-fit" data-aos="fade-right">
            A
          </p>
          <p className="w-fit">N</p>
          <p className="w-fit" data-aos="fade-left">
            D
          </p>
          <p className="w-fit" data-aos="fade-left">
            A
          </p>
          <p className="w-fit" data-aos="fade-left">
            N
          </p>
        </div>
        <div
          className="justify-center my-8 text-xl text-white lg:text-7xl md:text-6xl sm:text-5xl lg:my-5"
          style={{ fontFamily: "nasa" }}
          data-aos="fade-up"
        >
          2K23
        </div>
        <div
          className="my-5 text-xs text-center text-white lg:text-2xl md:text-xl sm:text-base"
          style={{ fontFamily: "michroma" }}
          data-aos="fade-up"
        >
          "Feel The Pulse of Innovation"
        </div>
        <div
          className="text-white lg:text-xl md:text-3xl sm:text=2xl text-base my-3 "
          data-aos="fade-up"
        >
          <button
            className="hover:text-2xl ease-out duration-200 px-8 py-2 font-bold text-yellow-400 rounded-lg bg-[#0b274a]  my-7 lg:my-5"
            style={{ fontFamily: "Syne" }}
          >
            <Link to={"/Events"}>REGISTER NOW</Link>
          </button>
        </div>
        <div className="animate-bounce" >
          <img src={down} alt="down image logo" />
        </div>
      </div>
    </>
  );
}

export default Registerpage;
