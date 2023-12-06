import { combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "@/app/(auth)/reducers";

/**
 * Raíz de los reducers de la aplicación.
 */
export const rootReducer = combineReducers({
    ...authReducer
})