import { authApi } from "@/app/(auth)/services";

/**
 * Reducer de la api de autenticación.
 */
export const authReducer = { [authApi.reducerPath]: authApi.reducer};