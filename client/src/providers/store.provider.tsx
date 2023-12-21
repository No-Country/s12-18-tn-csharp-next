import type { FC, PropsWithChildren, JSX } from "react";
import { Provider } from "react-redux";

import { store } from "@/store";

/**
 * Componente proveedor de la store de la app.
 * 
 * @param { PropsWithChildren } param0 - Props por defecto de un componente.
 * 
 * @returns { JSX.Element } Proveedor de la store de la app.
 */
export const StoreProvider: FC<PropsWithChildren> = ({ children }: PropsWithChildren): JSX.Element => {
    return (
        <Provider store={store}>
            { children }
        </Provider>
    );
};