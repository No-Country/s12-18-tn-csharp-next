import { MeApi } from "@/app/(main)/(routes)/me/services";
import type { UserInfoModel } from "@/app/(main)/(routes)/me/models";
import { userInfoAdapter } from "@/app/(main)/(routes)/me/adapters";
import { HTTP_METHODS } from "@/models";

/**
 * Servicio para actualizar la información del usuario.
 */
export const MeUpdateUserService = MeApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Petición para actualizar el usuario.
         */
        updateUser: builder.mutation<UserInfoModel, UserInfoModel>({
            query: (body) => ({
                url: "/",
                method: HTTP_METHODS.PATCH,
                body
            }),
            transformResponse: (response): UserInfoModel => userInfoAdapter(response)
        })
    })
})