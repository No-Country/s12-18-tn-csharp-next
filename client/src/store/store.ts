import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistReducer, persistStore } from "react-persist";

import { rootReducers } from "@/store/reducers";
import { persistConfig } from "@/store/config";
import { rootMiddlewares } from "./middlewares";

/**
 * Configuración de la store de estados globales de la aplicación.
 */
export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducers),
    middleware: (getDefaultMiddleware) => rootMiddlewares(getDefaultMiddleware)
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);