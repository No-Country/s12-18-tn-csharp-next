import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { authApi } from "@/app/(auth)/services";

/**
 * Configuración de la store de estados globales de la aplicación.
 */
export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});

setupListeners(store.dispatch);