import type { SubmitHandler } from "react-hook-form";

import { SignUpSchema } from "@/app/(auth)/(routes)/sign-up/models";
import { useSignUpMutation } from "@/app/(auth)/(routes)/sign-up/hooks";

/**
 * Hook para manejar el registro de un usuario.
 */
export const useSignUp = () => {
    // Funcionalidades del hook de la api de registro.
    const [signUp, { isLoading, isError, error }] = useSignUpMutation();

    /**
     * Función para manejar el registro de usuario.
     * 
     * @param { SignUpSchema } values - Valores del formulario de registro.
     */
    const handleSignUp: SubmitHandler<SignUpSchema> = (values: SignUpSchema) => {
        console.log({values});
        signUp(values);
    };

    return {
        handleSignUp,
        status: {
            isLoading,
            isError,
            error
        } 
    };
};