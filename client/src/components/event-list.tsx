import React from "react";
import EventSearchCard from "./event-search-card";
import EventSearchCardSkeleton from "./event-search-card-skeleton";

interface Props {
  events: any[];
  isLoading: boolean;
}

// TODO: update imgUrl
const EventList = ({ events, isLoading }: Props) => {
  return (
    <>
      {!isLoading ? (
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
      ) : (
        <>
          {[...Array(4)].map((_, index) => (
            <EventSearchCardSkeleton key={index} />
          ))}
        </>
      )}
    </>
  );
};

export default EventList;
