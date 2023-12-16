import type { FC, PropsWithChildren, JSX } from "react";

/**
 * Layout de los formularios.
 * 
 * @param { PropsWithChildren } param0 - Props por defecto de un componente con children.
 * 
 * @returns { JSX.Element } Layout de los formularios.
 */
export const FormLayout: FC<PropsWithChildren> = ({
    children
}: PropsWithChildren): JSX.Element => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <section className="w-full md:w-[50%] max-w-[30rem] m-10 p-10 border dark:border-white border-black rounded-md">
                { children }
            </section>
        </div>
    );
};