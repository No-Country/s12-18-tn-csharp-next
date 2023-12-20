import z from "zod";

import { bankDetailsSchema } from "@/app/(main)/(routes)/me/schemas";

/**
 * Modelo de los detalles del banco.
 */
export type BankDetailsModel = z.infer<typeof bankDetailsSchema>;

/**
 * Modelo de errores de los detaller del banco.
 */
export enum BankDetailsErrorModel {
    ACCOUNT_NUMBER_REQUIRED = "El número de cuenta es requerido.",
    INVALID_ACCOUNT_NUMBER = "El número de cuenta debe ser un número.",
    NEGATIVE_ACCOUNT_NUMBER = "El número de cuenta no debe ser negativo.",
    MIN_ACCOUNT_NUMBER = "El número de cuenta debe ser de mínimo 6 carácteres.",
    BANK_TYPE_REQUIRED = "El tipo de banco es requerido.",
    INVALID_BANK_TYPE = "El tipo de banco es invalido.",
    MIN_BANK_TYPE = "El tipo de cuenta debe ser de mínimo 5 carácteres.",
    BANK_NAME_REQUIRED = "El nombre del banco es requerido.",
    INVALID_BANK_NAME = "El nombre del banco es invalido.",
    MIN_BANK_NAME = "El nombre del banco debe ser de mínimo 2 carácteres."
}

/**
 * Modelo de los datos bancarios vacios del usuario.
 */
export const EmptyBankDetails: BankDetailsModel = {
    accountNumber: "" as unknown as number,
    type: "",
    bank: ""
};
