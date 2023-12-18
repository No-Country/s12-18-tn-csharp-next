import type { FC, PropsWithChildren, JSX } from "react";

import { FormLayout } from "@/components/layouts";

/**
 * Layout de la sección de autenticación.
 * 
 * @param { PropsWithChildren } param0 - Props por defecto de un componente.
 * 
 * @returns { JSX.Element } Layout de la sección de autenticación.
 */
const AuthLayout: FC<PropsWithChildren> = ({
    children
}: PropsWithChildren): JSX.Element => {
    return (
        <FormLayout>
            { children }
        </FormLayout>
    );
}

export default AuthLayout;