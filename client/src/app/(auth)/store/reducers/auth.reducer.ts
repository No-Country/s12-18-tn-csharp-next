import { authSlice } from "@/app/(auth)/slices";

/**
 * Reducer de la sección de autenticación.
 */
export const authReducer = {
    [authSlice.name]: authSlice.reducer
};