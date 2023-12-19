"use client";

import type { FC, JSX } from "react";

import { CardPropsLanging } from "@/components/props/props-card-lading/card-langing";
import { GroupCardsSkeleton } from "@/components/skeleton";
import { useEventsQuery } from "@/app/(main)/(routes)/me/hooks";

/**
 * Componente de los eventos del usuario autenticado.
 * 
 * @returns { JSX.Element } Componente de los eventos del usuario autenticado.
 */
export const MeEvents: FC = (): JSX.Element => {
    // Funcionalidades del hook de la obtención de los eventos.
    const {
        data: events,
        isError,
        isLoading,
        isFetching,
        isSuccess
    } = useEventsQuery();

    return (
        <section>
            <h2 className="text-4xl"> Mis Eventos </h2>
            <section className="mt-10">
                {isError && (
                    <h3 className="text-2xl text-center p-10"> Ocurrio un error. </h3>
                )}
                {(isLoading || isFetching) && <GroupCardsSkeleton />}
                {(isSuccess && events.length > 0)
                    ? <CardPropsLanging cardData={events} />
                    : <h3 className="text-2xl text-center p-10"> No haz creado ningún evento. </h3>}
            </section>
        </section>
    );
};