import React from "react";
import EventSort from "./event-sort";

interface Props {
  keyword: string;
}

const EventFilter = ({ keyword }: Props) => {
  return (
    <div className="flex gap-4">
      <EventSort keyword={keyword} />
    </div>
  );
};

export default EventFilter;
