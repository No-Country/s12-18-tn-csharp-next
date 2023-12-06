import { redirect } from "next/navigation";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { SerializedError } from "@reduxjs/toolkit";
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    MutationDefinition
} from "@reduxjs/toolkit/query";
import type { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";

import type { AuthUser } from "@/app/(auth)/models";
import { AppRoutesModel } from "@/models";
import { useAuthActions } from "@/app/(auth)/hooks";
import { SignUpSchema } from "@/app/(auth)/(routes)/sign-up/models";
import { SignInSchema } from "../(routes)/sign-in/models";

/**
 * Modelo de las propiedades del hook de autenticación.
 */
interface UseAuthProps {
    authFn: MutationTrigger<MutationDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, any, "authApi">>;
    isSuccess: boolean;
    UserLogged: AuthUser;
    isLoading: boolean;
    isError: boolean;
    error: FetchBaseQueryError | SerializedError | undefined;
}

/**
 * Hook para manejar las funcionalidades al autenticarse en la aplicación.
 * 
 * @param { UseAuthProps } param0 - Props del hook de autenticación.
 * 
 * @returns Funcionalidades de autenticación en la aplicación.
 */
export const useAuth = ({
    authFn,
    isSuccess,
    UserLogged,
    isLoading,
    isError,
    error
}: UseAuthProps) => {
    // Funcionalidades de los estados globales de autenticación de la aplicación.
    const { handleSetUser } = useAuthActions();

    useEffect(() => {
        // Verificamos si la petición fue éxitosa.
        if (isSuccess) {
            // Funcionalidad para configurar el usuario en el estado de autenticación.
            handleSetUser(UserLogged);
            // Redirijimos a la pantalla principal.
            redirect(AppRoutesModel.HOME);
        };
    }, [isSuccess]);

    /**
     * Modelo de los valores del manejador de autenticación.
     */
    type AuthValues = SignUpSchema | SignInSchema;

    /**
     * Función para manejar la autenticación de usuario.
     *
     * @param { any } values - Valores del formulario de autenticación.
     */
    const handleAuth: SubmitHandler<AuthValues> = async (
        values: AuthValues
    ) => {
        // Funcionalidad para registrar un usuario.
        await authFn(values);
    };

    return {
        handleAuth,
        status: {
            isLoading,
            isError,
            error
        }
    };
}