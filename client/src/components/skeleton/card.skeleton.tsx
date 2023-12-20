import type { FC, JSX } from "react";

import { Skeleton } from "@/components/ui";

/**
 * Componente del esqueleto de la card.
 * 
 * @returns { JSX.Element } Componente del esqueleto de la card.
 */
export const CardSkeleton: FC = (): JSX.Element => {
    return (
        <div className="mb-4 rounded-md p-4 shadow-md">
            <Skeleton className="h-[150px] w-full bg-gray-500" />
            <div className="mt-4">
                <Skeleton className="mb-2 h-[20px] w-[80%] bg-gray-500" />
                <Skeleton className="w-100% h-[60px] bg-gray-500" />
            </div>
        </div>
    );
};