import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import bg2 from "../../Images/homeImages/homepage_bg2.png";
import "../../assets/Exo-VariableFont_wght.ttf";
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
            <p style={{ fontFamily: "exo" }}
              className="flex items-center px-3 py-1 mx-0.5 md:mx-2 bg-[#0c2c53] rounded-lg  text-[10px] md:text-xl hover:text-yellow-500"
              key={item.id}
            >
              <a href={item.link} target="_blank" className="" style={{ fontFamily: "exo" }}>
                {item.name}
              </a>
              <BsArrowUpRight />
            </p>
          ))}
        </div>
        <div className="flex justify-around mt-5">
          <ul
            className="flex flex-wrap items-center justify-evenly text-[12px] w-48 md:w-96 md:text-2xl "
            style={{ fontFamily: "exo" }}
          >
            {data2.map((item) => (
              <li key={item.id} className="px-2 hover:text-yellow-500" style={{ fontFamily: "exo" }}>
                <a href={item.link} target="_blank" style={{ fontFamily: "exo" }}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-6">
        <p className="md:text-xl" style={{ fontFamily: "exo" }}>
          Connect With Us On:
        </p>
        <div className="flex">
          <div>
            <a href="https://www.linkedin.com/in/sac-gbpiet-791260289/?originalSubdomain=in">
              <BiLogoLinkedin className="text-white md:text-2xl" />
            </a>
          </div>
          <div className="">
            <a href="https://m.facebook.com/p/SAC-Gbpiet-100091933003060/">
              <BiLogoFacebook className="text-white md:text-2xl" />
            </a>
          </div>
          <div className="">
            <a href="https://instagram.com/sacgbpiet?igshid=MzMyNGUyNmU2YQ==">
              <BiLogoInstagram className="text-white md:text-2xl" />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UC2Dtejxsdmr459qmO2NyQow">
              <BiLogoYoutube className="text-white md:text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <p
          className="text-[12px] md:text-xl"
          style={{ fontFamily: "exo" }}
        >
          @Spandan 2k23.All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
