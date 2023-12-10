"use client";

import React from "react";

import EventFilter from "@/components/event-filter";
import EventList from "@/components/event-list";
import { useGetEventsQuery } from "@/components/sections/card-section-lading-page/hooks";

const page = () => {
  const { data, isLoading } = useGetEventsQuery(null, {});

  console.log(data);

  return (
    <section>
      <div className="container-search py-6">
        <h1 className="mb-5">Eventos buscados</h1>
        <div className="mb-5">
          <EventFilter />
        </div>
        {!isLoading && (
          <div className="flex flex-col-reverse gap-3 lg:grid lg:grid-cols-3">
            <div className="col-span-2">
              <EventList events={data} />
            </div>
            <div>
              <p className="mb-5">Events nearby:</p>
              <div className="h-[100px] w-full rounded-md bg-slate-600"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;