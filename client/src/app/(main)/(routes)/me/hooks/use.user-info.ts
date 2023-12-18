import { useEffect, type BaseSyntheticEvent } from "react";
import type { SubmitHandler } from "react-hook-form";

import { useUpdateUserMutation } from "@/app/(main)/(routes)/me/hooks";
import { UserInfoModel } from "@/app/(main)/(routes)/me/models";
import { useAuthActions } from "@/app/(auth)/hooks";
import { AuthUser } from "@/app/(auth)/models";
import { useToast } from "@/components/ui/use-toast";
import { useToggle } from "@/hooks";

/**
 * Modelo para las propiedades del hook de la información del usuario.
 */
interface UseUserInfoProps {
    currentUser: AuthUser;
    defaultValues: UserInfoModel;
}

/**
 * Hook para manipular la información del usuario en sesión.
 */
export const useUserInfo = ({ currentUser, defaultValues }: UseUserInfoProps) => {
    // Funcionalidades del toaster.
    const { toast } = useToast();

    // Funcionalidades de los estados globales de autenticación de la aplicación.
    const { handleSetUser } = useAuthActions();

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

    useEffect(() => {
        // Verificamos si la petición fue éxitosa.
        if (isSuccess) {
            /**
             * Conversión de los datos del usuario actual y el usuario actualizado.
             */
            const user = {
                ...currentUser,
                user: {
                    ...data
                }
            } as AuthUser;

            // Funcionalidad para configurar el usuario en el estado de autenticación.
            handleSetUser(user);
        }
    }, [isSuccess]);

    /**
     * Función para manejar la actualización de la información del usuario.
     * 
     * @param { UserInfoModel } values - Valores recibidos del formulario de información del usuario.
     * @param { BaseSyntheticEvent } e - Evento del formulario.
     * 
     * @returns { Promise<any> } Funcionalidad para actualizar la información del usuario.
     */
    const handleUserInfo: SubmitHandler<UserInfoModel> = async (
        values: UserInfoModel,
        e?: BaseSyntheticEvent
    ): Promise<any> => {
        // Prevenimos el evento por defecto.
        e?.preventDefault();

        /**
         * Modelo de las llaves del modelo por defecto del formulario.
         */
        type DefaultValuesKey = keyof typeof defaultValues;

        /**
         * Verificamos si los valores son iguales a los valores por defecto.
         */    
        const isDefault = Object
            .keys(values)
            .every((field) =>
                values[
                    field as DefaultValuesKey
                ] === defaultValues[
                    field as DefaultValuesKey
                ]
            );

        // Si los valores por defecto se mantienen igual, devolvemos un mensaje al usuario.
        if (isDefault) {
            // Cambiamos el estado de edición.
            toggleStatus();

            // Devolvemos el mensaje al usuario.
            return toast({
                title: "Tu información no ha cambiado.",
                description: "Tus datos son los mismos, por lo tanto, se mantienen igual."
            });
        };

        // Funcionalidad para actualizar un usuario.
        await updateUser(values);
    };

    return {
        handlers: {
            handleEditing: toggleStatus,
            handleUserInfo
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
