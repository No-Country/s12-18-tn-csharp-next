import React from "react";
import EventSearchCard from "./event-search-card";

interface Props {
  events: any[];
}

const EventList = ({ events }: Props) => {
  return (
    <>
      {events.map((event) => (
        <EventSearchCard
          key={event.event_Id}
          id={event.event_Id}
          title={event.title}
          description={event.description}
          imgUrl={event.media[0].url}
          date={event.created_Date}
          author={event.created_By_User}
        />
      ))}
    </>
  );
};

export default EventList;
