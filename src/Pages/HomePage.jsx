import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Registerpage from "../Components/HomeComponents/Register";
import Timeline from "../Components/HomeComponents/Timeline";
import Box from "../Components/HomeComponents/Box";
import MyCarousel from "../Components/HomeComponents/Carousel";

import dataofHome from '../data/homepageinfo.js'

function Homepage() {

  return (
    <>
      <Registerpage />
      <div className="my-4">
        <Timeline />
      </div>
      {dataofHome.map((item) => (
        <Box
          heading={item.heading}
          extraHeading={item.extraHeading}
          data={item.data}
          key={item.key}
        />
      ))}

      <div className="flex justify-center">
        <MyCarousel />
      </div>
    </>
  );
}

export default Homepage;
