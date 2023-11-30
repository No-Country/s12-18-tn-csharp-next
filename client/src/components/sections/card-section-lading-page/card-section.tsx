"use client";
import React from "react";
import { CardPropsLanging } from "@/components/props/props-card-lading/card-langing";
import {
  firstCardData,
  secondCardData,
} from "@/mocks/mock-lading-page/mock-data";

import { Skeleton } from "../../ui/skeleton";

export function CardSection() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    // Simular una carga asíncrona (por ejemplo, una llamada a una API)
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false); // Cambia el estado a false cuando los datos están listos
      }, 2000); // Simula una carga de 2 segundos
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <section>
        <article className="mb-5 mt-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-xl font-semibold">Eventos cerca de</h2>
            <div className="mb-2 mt-1 rounded-lg bg-sky-500 p-2">
              <a
                href="#"
                className="cursor-pointer font-bold text-white  hover:underline"
              >
                Buenos Aires, AR
              </a>
            </div>
          </div>
          <a href="#" className="hidden sm:block">
            Ver todos los eventos
          </a>
        </article>
        {loading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(8).keys()].map((index) => (
              <div key={index} className="rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-[150px] w-full bg-gray-500" />
                <div className="mt-4">
                  <Skeleton className="mb-2 h-[20px] w-[80%] bg-gray-500" />
                  <Skeleton className="w-100% h-[60px] bg-gray-500" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CardPropsLanging cardData={firstCardData} />
        )}
      </section>
      <section>
        <article className="mb-5 mt-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-xl font-semibold">Próximos eventos en línea</h2>
          </div>
          <a href="#" className="hidden sm:block">
            Ver todos los eventos
          </a>
        </article>
        {loading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4).keys()].map((index) => (
              <div key={index} className="rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-[150px] w-full bg-gray-500" />
                <div className="mt-4">
                  <Skeleton className="mb-2 h-[20px] w-[80%] bg-gray-500" />
                  <Skeleton className="w-100% h-[60px] bg-gray-500" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CardPropsLanging cardData={secondCardData} />
        )}
      </section>
    </React.Fragment>
  );
}
