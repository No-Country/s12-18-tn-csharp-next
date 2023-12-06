import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@/models";
import { getLocalStorageItem } from "@/utils";
import { AuthLocalStorageModel, EmptyUser, type AuthUser } from "@/app/(auth)/models";

/**
 * Sesión del usuario persistente.
 */
const session: AuthUser = getLocalStorageItem(AuthLocalStorageModel.AUTH) || EmptyUser;

/**
 * Slice del estado de autenticación.
 */
export const authSlice = createSlice({
    // Nombre del estado.
    name: AuthLocalStorageModel.AUTH,
    // Estado inicial.
    initialState: session,
    // Funcionalidades del estado.
    reducers: {
        /**
         * Función para configurar el usuario autenticado en el estado.
         * 
         * @param { PayloadAction<AuthUser> } action - Información de la acción en transcurso.
         * 
         * @returns { AuthUser } Usuario autenticado.
         */
        setUser: (_state, action: PayloadAction<AuthUser>) => action.payload,
        removeUser: (): AuthUser => EmptyUser
    }
});

/**
 * Función para buscar el estado de autenticación en la store.
 * 
 * @param { RootState } state - Estado principal de la store.
 * 
 * @returns { any } Estado de autenticación dentro de la store.
 */
export const selectAuth = (state: RootState): AuthUser => state.auth;