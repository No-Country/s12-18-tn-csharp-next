import type { FC } from "react";

/**
 * Componente del SVG del loader.
 * 
 * @param { any } props - Props cualquiera.
 * 
 * @returns { JSX.Element } SVG del loader.
 */
export const LoaderSVG: FC<any> = (props: any): JSX.Element => {
    return (
        <svg {...props}>
            <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path>
        </svg>
    );
};