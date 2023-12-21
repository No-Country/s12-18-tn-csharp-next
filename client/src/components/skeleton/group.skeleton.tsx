import type { FC, JSX } from "react";

import { CardSkeleton } from "@/components/skeleton";

/**
 * Componente de esqueletos de cards.
 * 
 * @returns { JSX.Element } Componente de esqueletos de cards.
 */
export const GroupCardsSkeleton: FC = (): JSX.Element => {
    return (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    );
};