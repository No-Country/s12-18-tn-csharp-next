import type { UpdatedUserInfo } from "@/app/(main)/(routes)/me/models";

/**
 * Función para adaptar la información bancaria del usuario.
 * 
 * @param { any } bankDetails - Usuario autenticado.
 * 
 * @returns { UserInfoModel } Información bancaria del usuario adaptada.
 */
export const updateUserInfo = (
    bankDetails: any
): Partial<UpdatedUserInfo> =>({
    bankDetails: {
        accountNumber: bankDetails.account_Number,
        type: bankDetails.type,
        bank: bankDetails.bank
    }
});

/**
 * Función para adaptar la información bancaria a modificar.
 * 
 * @param { any } bankDetails - Información bancaria adaptada.
 */
export const sendUpdateBankDetailsUser = (bankDetails: any) => ({
    bank_Details: {
        account_Number: bankDetails.accountNumber,
        type: bankDetails.type,
        bank: bankDetails.bank
    }
});