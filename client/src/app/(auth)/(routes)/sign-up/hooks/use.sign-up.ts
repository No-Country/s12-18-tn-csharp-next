import type { AuthUser } from "@/app/(auth)/models";
import { useAuth } from "@/app/(auth)/hooks";
import { useSignUpMutation } from "@/app/(auth)/(routes)/sign-up/hooks";

/**
 * Hook para manejar el registro de un usuario.
 */
export const useSignUp = () => {
    // Funcionalidades del hook de la api de registro.
    const [
        signUp,
        {
            data,
            isSuccess,
            isLoading,
            isError,
            error
        }
    ] = useSignUpMutation();

    /**
     * Usuario autenticado.
     */
    const UserLogged = data as AuthUser;

    // Usamos el hook de autenticación para obtener las funcionalidades del manejo
    // de las acciones de autenticación en los estados globales de la aplicación.
    return useAuth({
        authFn: signUp,
        isSuccess,
        UserLogged,
        isLoading,
        isError,
        error
    });
};
