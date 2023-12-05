import type { SubmitHandler } from "react-hook-form";

import { useSignInMutation } from "@/app/(auth)/(routes)/sign-in/hooks";
import { SignInSchema } from "@/app/(auth)/(routes)/sign-in/models";

/**
 * Hook para manejar la autenticación de un usuario.
 */
export const useSignIn = () => {
    // Funcionalidades del hook de la api de autenticación.
    const [signIn, { isLoading, isError, error }] = useSignInMutation();

    /**
     * Función para manejar la autenticación de usuario.
     * 
     * @param { SignInSchema } values - Valores del formulario de autenticación.
     */
    const handleSignIn: SubmitHandler<SignInSchema> = (values: SignInSchema) => {
        console.log({values});
        signIn(values);
    };

    return { handleSignIn, status: { isLoading, isError, error } };
};