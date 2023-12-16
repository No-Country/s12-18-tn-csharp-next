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
    BANK_TYPE_REQUIRED = "El tipo de banco es requerido.",
    INVALID_BANK_TYPE = "El tipo de banco es invalido.",
    BANK_NAME_REQUIRED = "El nombre del banco es requerido.",
    INVALID_BANK_NAME = "El nombre del banco es invalido."
}