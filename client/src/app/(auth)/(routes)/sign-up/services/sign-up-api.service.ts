import type { SignUpSchema } from "@/app/(auth)/(routes)/sign-up/models";
import { HTTP_METHODS } from "@/models";
import { authApi } from "@/app/(auth)/services";
import { API_AUTH_ROUTES } from "@/app/(auth)/models";
import { authUserAdapter } from "@/app/(auth)/adapters";

/**
 * Api de registro de la api de autenticación.
 */
export const signUpApi = authApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Petición para registrar a un usuario en la api de autenticación.
         */
        signUp: builder.mutation<any, SignUpSchema>({
            query: (body) => ({
                url: API_AUTH_ROUTES.REGISTER,
                method: HTTP_METHODS.POST,
                body
            }),
            transformResponse: (response) => {
                debugger;
                return response;
            }
        })
    })
})