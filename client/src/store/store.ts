import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

/**
 * Configuración de la store de estados globales de la aplicación.
 */
export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

setupListeners(store.dispatch);