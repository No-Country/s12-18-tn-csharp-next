"use client";

import React from "react";
import Link from "next/link";
import { CardPropsLanging } from "@/components/props/props-card-lading/card-langing";

import { useGetEventsQuery } from "./hooks";
import { Skeleton } from "../../ui/skeleton";

export function CardSection() {
  const { data, isLoading } = useGetEventsQuery(null, {});

  // console.log(data);

  React.useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        isLoading;
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <section>
        <article className="mb-5 mt-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2>Near events</h2>
            <div className="mb-2 mt-1 rounded-lg bg-sky-500 p-2">
              <a
                href="#"
                className="cursor-pointer font-bold text-white  hover:underline"
              >
                Buenos Aires, AR
              </a>
            </div>
          </div>
          <Link href="/search" className="hidden sm:block">
            See all the events
          </Link>
        </article>
        {isLoading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(8).keys()].map((index) => (
              <div key={index} className="rounded-md  p-4 shadow-md">
                <Skeleton className="h-[150px] w-full bg-gray-500" />
                <div className="mt-4">
                  <Skeleton className="mb-2 h-[20px] w-[80%] bg-gray-500" />
                  <Skeleton className="w-100% h-[60px] bg-gray-500" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CardPropsLanging cardData={data} />
        )}
      </section>
      {/* <section>
        <article className="mb-5 mt-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2>Next on-line events</h2>
          </div>
          <a href="#" className="hidden sm:block">
            See all the events
          </a>
        </article>
        {isLoading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4).keys()].map((index) => (
              <div key={index} className="rounded-md p-4 shadow-md mb-4">
                <Skeleton className="h-[150px] w-full bg-gray-500" />
                <div className="mt-4">
                  <Skeleton className="mb-2 h-[20px] w-[80%] bg-gray-500" />
                  <Skeleton className="w-100% h-[60px] bg-gray-500" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CardPropsLanging cardData={ data } />
          
        )}
      </section> */}
    </React.Fragment>
  );
}
