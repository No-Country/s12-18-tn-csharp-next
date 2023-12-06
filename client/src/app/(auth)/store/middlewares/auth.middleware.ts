import type { Middleware, PayloadAction } from "@reduxjs/toolkit";

import { removeLocalStorageItem, setLocalStorageItem } from "@/utils";
import { AuthStoreActionsModel } from "@/app/(auth)/models";

/**
 * Middleware para manejar la información de los estados localmente.
 * 
 * @returns { void } Manejo de la información local.
 */
export const handlerDataInLocalStorage: Middleware =
    (store): any => 
        (next: (arg0: any) => void): any =>
            (action: PayloadAction<any>): any => {

    // ANTES DE ACTUALIZAR EL ESTADO.

    /**
     * Arreglo de las acciones de los estados globales en la aplicación.
     */
    const actionType: string[] = action.type.split("/");
    /**
     * Llave de referencia al valor guardado localmente.
     */
    const keyStateAction: string = actionType[0];
    /**
     * Acción a realizar en el estado de la store.
     */
    const actionState: string = actionType[1];

    // Función para accionar las funcionalidades.
    next(action);

    // DESPUES DE ACTUALIZAR EL ESTADO.

    /**
     * Estados de la store.
     */
    const state = store.getState();

    // Verificamos si la acción es para configurar un usuario en la aplicación.
    if (
        actionState === AuthStoreActionsModel.SET_USER &&
        !!state.auth.token
    )
        // Guardamos a ese usuario en Local Storage.
        setLocalStorageItem(keyStateAction, { ...state.auth });

    // Verificamos si la acción es para remover al usuario de la aplicación.
    if (
        actionState === AuthStoreActionsModel.REMOVE_USER &&
        !!state.auth.token
    )
        // Removemos a ese usuario de Local Storage.
        removeLocalStorageItem(keyStateAction);
}