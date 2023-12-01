import { authApi } from "@/app/(auth)/services";

/**
 * Api de registro de la api de autenticación.
 */
export const signUpApi = authApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Petición para registrar a un usuario en la api de autenticación.
         */
        signUp: builder.mutation({
            query: (body) => ({
                url: "",
                method: "",
                body
            }),
            transformResponse: (response) => response
        })
    })
})