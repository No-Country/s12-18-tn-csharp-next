import { HTTP_METHODS } from "@/models";
import { authUserAdapter } from "@/app/(auth)/adapters";
import type { AuthUser } from "@/app/(auth)/models";
import { MeApi } from "@/app/(main)/(routes)/me/services";
import { UserInfoModel } from "@/app/(main)/(routes)/me/models";

/**
 * Servicio para actualizar la información del usuario.
 */
export const MeUpdateUserService = MeApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Petición para actualizar el usuario.
         */
        updateUser: builder.mutation<AuthUser, UserInfoModel>({
            query: (body) => ({
                url: "/",
                method: HTTP_METHODS.PATCH,
                body
            }),
            transformResponse: (response): AuthUser => authUserAdapter(response)
        })
    })
})