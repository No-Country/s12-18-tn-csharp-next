"use client";

import React from "react";
import Link from "next/link";
import { CardPropsLanging } from "@/components/props/props-card-lading/card-langing";

import { useGetEventsQuery } from "./hooks";
import { Skeleton } from "../../ui/skeleton";

export function CardSection() {
  const { data: eventsData, isLoading } = useGetEventsQuery(null, {});

  const limitedEightEvents = eventsData?.slice(0, 8);

  const orderedEventsData = eventsData?.slice().sort((a: any, b: any) => {
    const dateA: any = new Date(a.created_Date);
    const dateB: any = new Date(b.created_Date);

    // Ordenar en orden descendente (más reciente primero)
    return dateB - dateA;
  });

  const limitedFourEvents = orderedEventsData?.slice(0, 4);

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
            <h2>Eventos cercanos</h2>
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
            Ver todos los eventos
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
          <CardPropsLanging cardData={limitedEightEvents} />
        )}
      </section>
      <section>
        <article className="mb-5 mt-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2>Next on-line events</h2>
          </div>
          <Link href="/search" className="hidden sm:block">
            Ver todos los eventos
          </Link>
        </article>
        {isLoading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4).keys()].map((index) => (
              <div key={index} className="mb-4 rounded-md p-4 shadow-md">
                <Skeleton className="h-[150px] w-full bg-gray-500" />
                <div className="mt-4">
                  <Skeleton className="mb-2 h-[20px] w-[80%] bg-gray-500" />
                  <Skeleton className="w-100% h-[60px] bg-gray-500" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CardPropsLanging cardData={limitedFourEvents} />
        )}
      </section>
    </React.Fragment>
  );
}
