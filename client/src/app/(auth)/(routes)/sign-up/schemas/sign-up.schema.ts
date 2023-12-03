import z from "zod";

import { Gendre } from "@/app/(auth)/models";
import { AuthErrorsModel } from "@/app/(auth)/models";

/**
 * Esquema del registro de usuario.
 */
export const signUpSchema = z.object({
    name: z.string({
        required_error: AuthErrorsModel.NAME_REQUIRED,
        invalid_type_error: AuthErrorsModel.INVALID_NAME
    }).min(2, {
        message: AuthErrorsModel.NAME_MIN_LENGTH
    }),
    email: z.string({
        required_error: AuthErrorsModel.EMAIL_REQUIRED,
        invalid_type_error: AuthErrorsModel.INVALID_TYPE_EMAIL
    }).email({ message: AuthErrorsModel.INVALID_EMAIL }),
    password: z.string({
        required_error: AuthErrorsModel.PASS_REQUIRED,
        invalid_type_error: AuthErrorsModel.INVALID_PASS
    }).min(8, { message: AuthErrorsModel.PASS_MIN_LENGTH }),
    dni: z.string({
        required_error: AuthErrorsModel.DNI_REQUIRED,
        invalid_type_error: AuthErrorsModel.INVALID_DNI
    }).min(8, { message: AuthErrorsModel.DNI_MIN_LENGTH }),
    dateOfBirth: z.date({ required_error: AuthErrorsModel.DOB_REQUIRED, invalid_type_error: AuthErrorsModel.INVALID_TYPE_DOB }),
    gendre: z.enum(
        [Gendre.PREFER_NOT_TO_SAY, Gendre.FEMALE, Gendre.MALE],
        {
            required_error: AuthErrorsModel.GENDRE_REQUIRED,
            invalid_type_error: AuthErrorsModel.INVALID_GENDRE
        }
    )
});