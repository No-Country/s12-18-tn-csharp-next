import { authApi } from "@/app/(auth)/services";

/**
 * Reducer de la api de autenticación.
 */
export const authApiReducer = {
    [authApi.reducerPath]: authApi.reducer
};