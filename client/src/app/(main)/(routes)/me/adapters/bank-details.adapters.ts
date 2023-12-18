import type { UpdatedUserInfo } from "@/app/(main)/(routes)/me/models";

/**
 * Función para adaptar la información bancaria del usuario.
 * 
 * @param { any } bankDetails - Usuario autenticado.
 * 
 * @returns { UserInfoModel } Información bancaria del usuario adaptada.
 */
export const updateUserInfo = (bankDetails: any): Partial<UpdatedUserInfo> => ({
    bankDetails: {
        accountNumber: bankDetails.accountNumber,
        type: bankDetails.type,
        bank: bankDetails.bank
    }
});