import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import bg2 from "../../Images/homeImages/homepage_bg2.png";
const data1 = [
  {
    id: 2,
    name: "GBPIET",
    link: "https://gbpec.ac.in/",
  },
  {
    id: 3,
    name: "SAC",
    link: "https://gbpec.ac.in/student-life/student-activity-cell/",
  },
];

const data2 = [
  {
    id: 1,
    name: "Workshops",
    link: "WWW.Google.com",
  },
  {
    id: 2,
    name: "FAQ's",
    link: "WWW.Google.com",
  },
  {
    id: 3,
    name: "T&C",
    link: "WWW.Google.com",
  },
];
const Footer = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
  };
  return (
    <div className="px-4 mt-10 text-white bg-white rounded-3xl bg-opacity-20 backdrop-blur-lg drop-shadow-sm">
      {" "}
      <div className="flex flex-col py-5 border-b-4 md:py-10 md:flex-row md:justify-between">
        <div className="flex items-center justify-evenly ">
          {data1.map((item) => (
            <p
              className="flex items-center px-3 py-1 mx-0.5 md:mx-2 bg-[#0c2c53] rounded-lg  text-[10px] md:text-xl hover:text-yellow-500"
              key={item.id}
            >
              <a href={item.link} target="_blank" className="">
                {item.name}
              </a>
              <BsArrowUpRight />
            </p>
          ))}
        </div>
        <div className="flex justify-around mt-5">
          <ul
            className="flex flex-wrap items-center justify-evenly text-[12px] w-48 md:w-96 md:text-2xl "
            style={{ fontFamily: "sharetech" }}
          >
            {data2.map((item) => (
              <li key={item.id} className="px-2 hover:text-yellow-500">
                <a href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-6">
        <p className="md:text-xl" style={{ fontFamily: "sharetech" }}>
          Connect With Us On:
        </p>
        <div className="flex">
          <div>
            <a href="https://www.linkdin.com">
              <BiLogoLinkedin className="text-white md:text-2xl" />
            </a>
          </div>
          <div className="">
            <a href="https://www.facebook.com">
              <BiLogoFacebook className="text-white md:text-2xl" />
            </a>
          </div>
          <div className="">
            <a href="https://www.instagram.com">
              <BiLogoInstagram className="text-white md:text-2xl" />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/">
              <BiLogoYoutube className="text-white md:text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <p
          className="text-[12px] md:text-xl"
          style={{ fontFamily: "sharetech" }}
        >
          @Spandan 2k23.All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
