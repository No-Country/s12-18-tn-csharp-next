import type { FC, PropsWithChildren, JSX } from "react";

import { cn } from "@/lib";

/**
 * Modelo de las propiedades del layout para formularios
 */
interface FormLayoutProps extends PropsWithChildren {
    uniqueForm?: boolean;
}

/**
 * Layout de los formularios.
 * 
 * @param { FormLayoutProps } param0 - Propiedades del layout del formulario.
 * 
 * @returns { JSX.Element } Layout de los formularios.
 */
export const FormLayout: FC<FormLayoutProps> = ({
    children,
    uniqueForm
}: FormLayoutProps): JSX.Element => {
    return (
        <div className={cn(
            "flex items-center justify-center",
            uniqueForm && "min-h-screen"
        )}>
            <section className="w-full md:w-[50%] max-w-[30rem] m-10 p-10 border dark:border-white border-black rounded-md">
                { children }
            </section>
        </div>
    );
};