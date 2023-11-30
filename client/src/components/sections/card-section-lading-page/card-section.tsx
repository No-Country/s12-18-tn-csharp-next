import React from "react";
import { CardPropsLanging } from "@/components/props/propsCardLading/cardLanging";
import {
  firstCardData,
  secondCardData,
} from "@/mocks/mock-lading-page/mock-data";

export function CardSection() {
  return (
    <React.Fragment>
      <section>
        <article className="mb-5 mt-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-xl font-semibold">Eventos cerca de</h2>
            <div className="mb-2 mt-1 rounded-lg bg-sky-500 p-2">
              <a href="#" className="cursor-pointer font-bold  hover:underline">
                Buenos Aires, AR
              </a>
            </div>
          </div>
          <a href="#" className="hidden sm:block">
            Ver todos los eventos
          </a>
        </article>
        <CardPropsLanging cardData={firstCardData} />
        {/* <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"></section> */}
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
        <CardPropsLanging cardData={secondCardData} />
      </section>
    </React.Fragment>
  );
}
