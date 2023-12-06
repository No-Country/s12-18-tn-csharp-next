import { combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "@/app/(auth)/reducers";
import {eventReducer } from "@/app/(main)/reducers"

/**
 * Raíz de los reducers de la aplicación.
 */
export const rootReducer = combineReducers({
    ...authReducer,
    ...eventReducer
})