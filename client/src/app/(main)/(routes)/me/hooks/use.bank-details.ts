import type { SubmitHandler } from "react-hook-form";

import { useUpdateUserMutation } from "@/app/(main)/(routes)/me/hooks";
import { useToggle } from "@/hooks";
import { BankDetailsModel } from "../models";

/**
 * Hook para manejar la información bancaria del usuario.
 */
export const useBankDetails = () => {
    // Estado para saber si se esta editando el usuario.
    const { status, toggleStatus } = useToggle();

    // Funcionalidades del hook de la api de manipular la información del usuario.
    const [
        updateUser,
        {
            data,
            isSuccess,
            isLoading,
            isError,
            error 
        }
    ] = useUpdateUserMutation();

    /**
     * Función para manejar la actualización de la información bancaria del usuario.
     * 
     * @param { UserInfoModel } values - Valores recibidos del formulario de la información bancaria del usuario.
     * 
     * @returns { Promise<any> } Funcionalidad para actualizar la información bancaria del usuario.
     */
    const handleBankDetails: SubmitHandler<BankDetailsModel> = async (
        values: BankDetailsModel
    ): Promise<any> => {
        await updateUser({ bankDetails: values });
    };

    return {
        handlers: {
            handleEditing: toggleStatus,
            handleBankDetails
        },
        status: {
            isEditing: status,
            isLoading,
            isSuccess,
            isError,
            error
        }
    };
};