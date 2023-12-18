"use client";

import type { FC, JSX } from "react";

import { useEventsQuery } from "@/app/(main)/(routes)/me/hooks";

export const MeEvents: FC = (): JSX.Element => {
    const { data: events, error, isLoading } = useEventsQuery();
    console.log({events});
    return (
        <h1>Eventos</h1>
    );
};