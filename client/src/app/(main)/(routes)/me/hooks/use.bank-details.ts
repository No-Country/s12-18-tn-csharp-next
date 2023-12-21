import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";

import { useUpdateUserMutation, useBankDetailsActions } from "@/app/(main)/(routes)/me/hooks";
import { BankDetailsModel } from "@/app/(main)/(routes)/me/models";
import { useToast } from "@/components/ui/use-toast";
import { useToggle } from "@/hooks";

/**
 * Hook para manejar la información bancaria del usuario.
 */
export const useBankDetails = () => {
    const { toast } = useToast();
    // Estado para saber si se esta editando el usuario.
    const { status, toggleStatus } = useToggle();

    // Funcionalidades de los estados globales de la información bancaria del usuario en la aplicación.
    const { handleSetBankDetails } = useBankDetailsActions();

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

    useEffect(() => {
        // Verificamos si la petición fue éxitosa.
        if (isSuccess) {
            // Cambiamos el estado de edición.
            toggleStatus();
            
            // Funcionalidad para configurar la información bancaria del usuario en el estado global.
            handleSetBankDetails(data?.bankDetails as BankDetailsModel);
        }
        if (error) {
            // Cambiamos el estado de edición.
            toggleStatus();

            // Mnadamos un mensaje al usuario.
            toast({
                title: "Ocurrio un error al modificar tu información.",
                description: "No se pudo modificar tu información debido a que ocurrio un error."
            });
        }
    }, [isSuccess, isError]);

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