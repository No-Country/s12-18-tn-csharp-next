import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { rootReducers } from "@/store/reducers";
import { rootMiddlewares } from "@/store/middlewares";

/**
 * Configuración de la store de estados globales de la aplicación.
 */
export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => rootMiddlewares(getDefaultMiddleware)
});

setupListeners(store.dispatch);
