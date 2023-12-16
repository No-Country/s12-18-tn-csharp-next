import z from "zod";

import { BankDetailsErrorModel } from "@/app/(main)/(routes)/me/models";

/**
 * Esquema de los detalles banarios del usuario.
 */
export const bankDetailsSchema = z.object({
    accountNumber: z.number({
        required_error: BankDetailsErrorModel.ACCOUNT_NUMBER_REQUIRED,
        invalid_type_error: BankDetailsErrorModel.INVALID_ACCOUNT_NUMBER
    }),
    type: z.string({
        required_error: BankDetailsErrorModel.BANK_TYPE_REQUIRED,
        invalid_type_error: BankDetailsErrorModel.INVALID_BANK_TYPE
    }),
    bank: z.string({
        required_error: BankDetailsErrorModel.BANK_NAME_REQUIRED,
        invalid_type_error: BankDetailsErrorModel.INVALID_BANK_NAME
    })
});