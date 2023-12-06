import type { FC, PropsWithChildren, JSX } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { store, persistor } from "@/store";

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
            <PersistGate loading={null} persistor={persistor}>
                { children }
            </PersistGate>
        </Provider>
    );
};