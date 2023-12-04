import type { SignInSchema } from "@/app/(auth)/(routes)/sign-in/models";
import { API_AUTH_ROUTES } from "@/app/(auth)/models";
import { authApi } from "@/app/(auth)/services";
import { HTTP_METHODS } from "@/models";

/**
 * Api de autenticación de la api de autenticación.
 */
export const signInApi = authApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Petición para autenticar a un usuario en la api de autenticación.
         */
        signIn: builder.mutation<any, SignInSchema>({
            query: (body) => ({
                url: API_AUTH_ROUTES.LOGIN,
                method: HTTP_METHODS.POST,
                body
            }),
            transformResponse: (response) => {
                debugger;
                return response;
            }
        })
    }),
});