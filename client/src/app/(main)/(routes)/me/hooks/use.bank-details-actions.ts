import type { BankDetailsModel } from "@/app/(main)/(routes)/me/models";
import { setBankDetails, removeBankDetails } from "@/app/(main)/(routes)/me/store";
import { useAppDispatch } from "@/hooks";

export const useBankDetailsActions = () => {
    /**
     * Despachador de las acciones de la store de estados globales.
     */
    const dispatch = useAppDispatch();

    /**
     * Función para manejar la configuración de la información bancaria del usuario en la aplicación.
     * 
     * @param { BankDetailsModel } bankDetails - Datos bancarios del usuario.
     * 
     * @returns Funcionalidad para la configuración de la información bancaria del usuario.
     */
    const handleSetBankDetails = (
        bankDetails: BankDetailsModel
    ) => dispatch(setBankDetails(bankDetails));

    /**
     * Función para remover los datos bancarios del usuario.
     * 
     * @returns Funcionalidad para remover los datos bancarios del usuario.
     */
    const handleRemoveBankDetails = () => dispatch(removeBankDetails());

    return { handleSetBankDetails };
};