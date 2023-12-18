import { bankDetailsSlice } from "../slices";

/**
 * Reducer de la sección de la información bancaria del usuario.
 */
export const bankDetailsReducer = {
    [bankDetailsSlice.name]: bankDetailsSlice.reducer
};