"use client";

import React from "react";

import { useSearchParams } from "next/navigation";

import EventFilter from "@/components/event-filter";
import EventList from "@/components/event-list";
import { useGetFilteredEventsQuery } from "@/components/sections/card-section-lading-page/hooks";
import { Skeleton } from "@/components/ui";

const page = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const orderBy = searchParams.get("orderBy");

  const queryParams = new URLSearchParams();

  if (keyword) queryParams.set("searchTerm", keyword);
  if (orderBy) queryParams.set("orderBy", orderBy === "newest" ? "DSC" : "ASC");

  const { data, isLoading } = useGetFilteredEventsQuery(queryParams.toString());

  return (
    <section>
      <div className="container-search py-6">
        <h1 className="mb-5">Eventos buscados</h1>
        <div className="mb-5">
          <EventFilter keyword={keyword || ""} />
        </div>
        <div className="flex flex-col-reverse gap-3 lg:grid lg:grid-cols-3">
          <div className="col-span-2">
            <EventList events={data} isLoading={isLoading} />
          </div>
          <div>
            <p className="mb-5">Eventos cercanos</p>
            <Skeleton className="h-[100px] w-full rounded-md bg-slate-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
