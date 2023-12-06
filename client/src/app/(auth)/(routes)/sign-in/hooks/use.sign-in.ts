import type { AuthUser } from "@/app/(auth)/models";
import { useSignInMutation } from "@/app/(auth)/(routes)/sign-in/hooks";
import { useAuth } from "@/app/(auth)/hooks";

/**
 * Hook para manejar la autenticación de un usuario.
 */
export const useSignIn = () => {
    // Funcionalidades del hook de la api de autenticación.
    const [
        signIn,
        {
            data,
            isSuccess,
            isLoading,
            isError,
            error, 
        }
    ] = useSignInMutation();

    /**
     * Usuario autenticado.
     */
    const UserLogged = data as AuthUser;

    // Usamos el hook de autenticación para obtener las funcionalidades del manejo
    // de las acciones de autenticación en los estados globales de la aplicación.
    return useAuth({
        authFn: signIn,
        isSuccess,
        UserLogged,
        isLoading,
        isError,
        error
    });
};