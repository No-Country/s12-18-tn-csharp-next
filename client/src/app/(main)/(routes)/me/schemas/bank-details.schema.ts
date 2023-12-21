import z from "zod";

import { BankDetailsErrorModel } from "@/app/(main)/(routes)/me/models";

/**
 * Esquema de los detalles banarios del usuario.
 */
export const bankDetailsSchema = z.object({
    accountNumber: z.string({
        required_error: BankDetailsErrorModel.ACCOUNT_NUMBER_REQUIRED,
        invalid_type_error: BankDetailsErrorModel.INVALID_ACCOUNT_NUMBER,
    })
    .min(6, { message: BankDetailsErrorModel.MIN_ACCOUNT_NUMBER })
    .transform((value, ctx) => {
        /**
         * Conversión númerica del valor del monto.
         */
        const parsed = Number(value);

        // Si no es un valor númerico, devolvemos un error.
        if (isNaN(parsed)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: BankDetailsErrorModel.INVALID_ACCOUNT_NUMBER
            });

            return z.NEVER;
        };

        // Si el valor es negativo, devolvemos un error.
        if (parsed < 0) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: BankDetailsErrorModel.NEGATIVE_ACCOUNT_NUMBER
            });

            return z.NEVER;
        }

        return parsed;
    }),
    type: z.string({
        required_error: BankDetailsErrorModel.BANK_TYPE_REQUIRED,
        invalid_type_error: BankDetailsErrorModel.INVALID_BANK_TYPE
    })
    .min(5, { message: BankDetailsErrorModel.MIN_BANK_TYPE }),
    bank: z.string({
        required_error: BankDetailsErrorModel.BANK_NAME_REQUIRED,
        invalid_type_error: BankDetailsErrorModel.INVALID_BANK_NAME
    })
    .min(2, { message: BankDetailsErrorModel.MIN_BANK_NAME })
});