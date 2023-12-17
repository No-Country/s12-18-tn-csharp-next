import React from "react";
import EventSearchCard from "./event-search-card";

interface Props {
  events: any[];
}

// TODO: update imgUrl
const EventList = ({ events }: Props) => {
  return (
    <>
      {events.map((event) => (
        <EventSearchCard
          key={event.event_Id}
          id={event.event_Id}
          title={event.title}
          description={event.description}
          imgUrl="example"
          date={event.created_Date}
          author={event.created_By_User}
        />
      ))}
    </>
  );
};

export default EventList;
