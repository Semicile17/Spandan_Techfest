import React, { useState, useEffect } from "react";
import { Eventdata } from "../data/eventData.js";
import EventUpper from "../Components/EventComponents/EventUpper.jsx";
import Filter from "../Components/EventComponents/Filter.jsx";
import Showcase from "../Components/EventComponents/Showcase.jsx";

const EventPage = () => {
  const [events, setEvents] = useState( Eventdata );
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const filteredEvents = Eventdata.filter((f) =>
        f.tags.includes("Robotics")
      );

      setEvents(filteredEvents);
    }, 1000);
  }, []);

  const filterEvents = (tag) => {
    setTimeout(() => {
      if (tag != "Robotics") {
        const filteredEvents = Eventdata.filter((f) => f.tags.includes(tag));
        setEvents(filteredEvents);
      } else {
        const filteredEvents = Eventdata.filter((f) =>
          f.tags.includes("Robotics")
        );

        setEvents(filteredEvents);
      }
    }, 200);
  };
  return (
    <div className="flex flex-col w-full md:w-full h-fit bg-[#002046] portfolio-content-wrapper ">
      <EventUpper />
      <Filter filterEvents={(tag) => filterEvents(tag)} />
      <Showcase data={events} transition={transition} />
    </div>
  );
};

export default EventPage;
