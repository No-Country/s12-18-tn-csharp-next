import { HTTP_METHODS } from "@/models";
import { authApi } from "@/app/(auth)/services";
import { API_AUTH_ROUTES, type UserToRegister } from "@/app/(auth)/models";

/**
 * Api de registro de la api de autenticación.
 */
export const signUpApi = authApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Petición para registrar a un usuario en la api de autenticación.
         */
        signUp: builder.mutation<any, UserToRegister>({
            query: (body) => ({
                url: API_AUTH_ROUTES.REGISTER,
                method: HTTP_METHODS.POST,
                body
            }),
            transformResponse: (response) => response
        })
    })
})