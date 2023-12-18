import { authSlice } from "../slices";

/**
 * Reducer de la sección de la información bancaria del usuario.
 */
export const bankDetailsReducer = {
    [authSlice.name]: authSlice.reducer
};