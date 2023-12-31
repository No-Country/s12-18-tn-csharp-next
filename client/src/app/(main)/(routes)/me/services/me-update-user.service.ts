import { MeApi } from "@/app/(main)/(routes)/me/services";
import type { UpdatedUserInfo } from "@/app/(main)/(routes)/me/models";
import {
    userInfoAdapter,
    updateUserInfo,
    sendUpdateBankDetailsUser
} from "@/app/(main)/(routes)/me/adapters";
import { HTTP_METHODS } from "@/models";

/**
 * Servicio para actualizar la información del usuario.
 */
export const MeUpdateUserService = MeApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Petición para actualizar el usuario.
         */
        updateUser: builder.mutation<Partial<UpdatedUserInfo>, Partial<UpdatedUserInfo>>({
            query: (body) => ({
                url: "/",
                method: HTTP_METHODS.PATCH,
                body: body.bankDetails?.accountNumber
                    ? sendUpdateBankDetailsUser(body.bankDetails)
                    : body
            }),
            transformResponse: (response): Partial<UpdatedUserInfo> => {
                // Verificamos si en la respuesta vienen datos bancarios.
                if (!(response as any).bank_Details?.account_Number)
                    // Devolvemos la información actualizada del usuario.
                    return userInfoAdapter(response);
                else
                    // Devolvemos los datos bancarios en caso que existan.
                    return updateUserInfo((response as any).bank_Details);
            },
        })
    })
})