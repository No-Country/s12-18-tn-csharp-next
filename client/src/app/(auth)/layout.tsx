import type { FC, PropsWithChildren, JSX } from "react";

/**
 * Layput de la sección de autenticación.
 * 
 * @param { PropsWithChildren } param0 - Props por defecto de un componente.
 * 
 * @returns { JSX.Element } Layout de la sección de autenticación.
 */
const AuthLayout: FC<PropsWithChildren> = ({
    children
}: PropsWithChildren): JSX.Element => {
    return (
        <div className="h-full flex items-center justify-center">
            <section className="w-full md:w-[50%] max-w-[30rem] m-10 p-10 border dark:border-white border-black rounded-md">
                { children }
            </section>
        </div>
    );
}

export default AuthLayout;