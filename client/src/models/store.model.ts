import { store } from "@/store";

/**
 * Modelo del estado que centraliza los estados globales de la aplicación.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Modelo de las acciones de los estados globales de la aplicación.
 */
export type AppDispatch = typeof store.dispatch;