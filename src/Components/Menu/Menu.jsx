import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import logo from "../../Images/homeImages/logoc.png";
import "../../data/fonts.css";
import bg2 from "../../Images/homeImages/homepage_bg2.png";
const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("Home");
  const backgroundStyle = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
  };

  const activeClass = "text-yellow-500";

  const clickhandler = (id) => {
    setActive(id);
  };

  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  return (
    <div
      style={backgroundStyle}
      className="flex items-center justify-between w-full p-1 rounded-3xl md:pr-5 md:backdrop-filter md:backdrop-blur-3xl md:bg-opacity-100"
    >
      <div className="w-12 md:w-20">
        <img src={logo} alt="logo" />
      </div>
      <div
        className="mobilemenu relative z-[99] md:hidden"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? (
          <IoMdClose className={"text-2xl text-white"} />
        ) : (
          <CgMenuRight className={"text-2xl text-white"} />
        )}
      </div>

      <div
        className={`fixed w-full h-full top-0 left-0 z-[9] bg-[#002046]  flex-col justify-center items-center gap-[35px] md:flex md:flex-row md:relative md:w-auto md:h-auto md:gap-[unset] md:bg-transparent ${
          mobileMenu ? "flex" : "hidden"
        }`}
      >
        <span
          onClick={() => setMobileMenu(!mobileMenu)}
          className="hover:text-yellow-500 text-white md:text-2xl md:font-normal md:leading-none ml-5 p-1 cursor-pointer shadow-[inset_0_0_0_0_white] shadow-white duration-400 hover:shadow-white text-2xl font-semibold "
          style={{ fontFamily: "exo" }}
        >
          <Link
            to={"/"}
            style={{ fontFamily: "exo" }}
            onClick={() => clickhandler("Home")}
            className={`${currentPath === "/" ? activeClass : ""}`}
          >
            HOME
          </Link>
        </span>
        <span
          onClick={() => setMobileMenu(!mobileMenu)}
          className="hover:text-yellow-500 text-white md:text-2xl md:font-normal leading-none ml-5 p-1 cursor-pointer shadow-[inset_0_0_0_0_white] shadow-white duration-300 hover:shadow-white text-2xl font-semibold "
          style={{ fontFamily: "exo" }}
        >
          <Link
            to={"/Events"}
            style={{ fontFamily: "exo" }}
            onClick={() => clickhandler("Events")}
            className={`${
              currentPath ===
              ("/Events" ||
                "/Events/1" ||
                "/Events/2" ||
                "/Events/3" ||
                "/Events/4" ||
                "/Events/5" ||
                "/Events/6" ||
                "/Events/7")
                ? activeClass
                : ""
            }`}
          >
            EVENTS
          </Link>
        </span>
        <span
          onClick={() => setMobileMenu(!mobileMenu)}
          className="hover:text-yellow-500 text-white md:text-2xl md:font-normal leading-none ml-5 p-1 cursor-pointer shadow-[inset_0_0_0_0_white] shadow-white duration-300 hover:shadow-white text-2xl font-semibold"
          style={{ fontFamily: "exo" }}
        >
          <Link
            onClick={() => clickhandler("About")}
            className={`${currentPath === "/AboutUs" ? activeClass : ""}`}
            to={"/AboutUs"}
            style={{ fontFamily: "exo" }}
          >
            ABOUT US
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Menu;
