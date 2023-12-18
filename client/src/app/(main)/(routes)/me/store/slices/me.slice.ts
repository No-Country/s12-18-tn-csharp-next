import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { BankDetailsModel, EmptyBankDetails, UpdatedUserInfo } from "@/app/(main)/(routes)/me/models";
import { BankDetailsLocalStorageModel } from "@/app/(main)/(routes)/me/models";
import { getLocalStorageItem } from "@/utils";
import type { RootState } from "@/models";

/**
 * Datos bancarios del usuario persistentes.
 */
const bankDetails = getLocalStorageItem(BankDetailsLocalStorageModel.BANK_DETAILS) || EmptyBankDetails;

/**
 * Slice del estado de datos bancarios.
 */
export const bankDetailsSlice = createSlice({
    // Nombre del estado.
    name: BankDetailsLocalStorageModel.BANK_DETAILS,
    // Estado inicial.
    initialState: bankDetails,
    // Funcionalidades del estado.
    reducers: {
        /**
         * Función para configurar los datos bancarios del usuario en el estado.
         *  
         * @param { PayloadAction<Partial<UpdatedUserInfo>> } action - Información de la acción en transcurso.
         * 
         * @returns { Partial<UpdatedUserInfo> } Datos actualizados.
         */
        setBankDetails: (_state, action: PayloadAction<Partial<UpdatedUserInfo>>) => action.payload,
        /**
         * Función para remover los datos bancarios en el estado.
         * 
         * @returns Datos bancarios vacios.
         */
        removeBankDetails: (): BankDetailsModel => EmptyBankDetails
    }
});

/**
 * Función para buscar el estado de detalles bancarios en la store.
 * 
 * @param { RootState } state - Estado principal de la store.
 * 
 * @returns { BankDetailsModel } Estado de los detalles bancarios dentro de la store.
 */
export const selectBankDetails = (state: RootState): BankDetailsModel => state.bankDetails;