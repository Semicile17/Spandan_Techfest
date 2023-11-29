import React, { useState } from "react";

const filterdata = [
  { name: "Robotics", id: "Robotics" },
  { name: "Coding", id: "Coding" },
  { name: "Gaming", id: "Gaming" },
  { name: "Others", id: "Others" },
];
const Filter = ({ filterEvents }) => {
  const [active, setActive] = useState("Robotics");
  const clickhandler = (id) => {
    setActive(id);
    filterEvents(id);
  };

  return (
    <ul className="flex items-center mx-4 list-none border-b-2 md:mx-0 justify-evenly filter-menu-items md:justify-evenly" style={{fontFamily :"Syne"}}>
      {filterdata.map((item) => {
        const activeClass = "border-yellow-500 border-b-4   text-white";
        return (
          <li
            className={`py-2 text-md md:text-4xl text-white md:font-normal md:leading-7 font-normal leading-5 cursor-pointer ${
              active === item.id ? activeClass : ""
            }`}
            key={item.id}
            onClick={() => clickhandler(item.id)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
