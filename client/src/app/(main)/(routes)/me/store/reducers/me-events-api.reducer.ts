import { MeApi } from "@/app/(main)/(routes)/me/services";

/**
 * Reducer de la api de información de usuario.
 */
export const meApiReducer = {
    [MeApi.reducerPath]: MeApi.reducer
};