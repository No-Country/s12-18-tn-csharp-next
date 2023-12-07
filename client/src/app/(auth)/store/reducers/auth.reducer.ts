import { authSlice } from "@/app/(auth)/store/slices";

/**
 * Reducer de la sección de autenticación.
 */
export const authReducer = {
    [authSlice.name]: authSlice.reducer
};