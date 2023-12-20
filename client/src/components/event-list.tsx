import React from "react";
import Link from "next/link";

import EventSearchCard from "./event-search-card";
import EventSearchCardSkeleton from "./event-search-card-skeleton";

import { Button } from "./ui";

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
          {events.length === 0 && (
            <div className="flex flex-col justify-center">
              <p className="text-center">¡Ningún evento fue encontrado!</p>
              <Link className="text-center" href="/search">
                <Button className="mt-2">Limpiar búsqueda</Button>
              </Link>
            </div>
          )}
          {events.length > 0 &&
            events.map((event) => (
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
