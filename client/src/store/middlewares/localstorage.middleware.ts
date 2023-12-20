import type { Middleware, PayloadAction } from "@reduxjs/toolkit";

import { MeStoreActionsModel } from "@/app/(main)/(routes)/me/models";
import { AuthStoreActionsModel } from "@/app/(auth)/models";
import { removeLocalStorageItem, setLocalStorageItem, saveSession } from "@/utils";

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
        saveSession(keyStateAction, { ...state.auth });

    // Verificamos si la acción es para remover al usuario de la aplicación.
    if (
        actionState === AuthStoreActionsModel.REMOVE_USER &&
        !state.auth.token
    )
        // Removemos a ese usuario de Local Storage.
        removeLocalStorageItem(keyStateAction);

    // Verificamos si la acción es para configurar la información bancaria del usuario en la aplicación.
    if (
        actionState === MeStoreActionsModel.SET_BANK_DETAILS &&
        !!state.bankDetails.accountNumber
    )
        // Guardamos la información bancaria en Local Storage.
        setLocalStorageItem(keyStateAction, { ...state.bankDetails });

    // Verificamos si la acción es para remover los datos bancarios de la aplicación.
    if (
        actionState === MeStoreActionsModel.REMOVE_BANK_DETAILS &&
        !state.auth.token
    )
        // Removemos la información bancaria de Local Storage.
        removeLocalStorageItem(keyStateAction);
}