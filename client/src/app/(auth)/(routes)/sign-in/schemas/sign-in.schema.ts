import z from "zod";

import { AuthErrorsModel } from "@/app/(auth)/models";

/**
 * Esquema de la autenticación de usuario.
 */
export const signInSchema = z.object({
    email: z.string({
        required_error: AuthErrorsModel.EMAIL_REQUIRED,
        invalid_type_error: AuthErrorsModel.INVALID_TYPE_EMAIL
    }).email({ message: AuthErrorsModel.INVALID_EMAIL }),
    password: z.string({
        required_error: AuthErrorsModel.PASS_REQUIRED,
        invalid_type_error: AuthErrorsModel.INVALID_PASS
    }).min(8, { message: AuthErrorsModel.PASS_MIN_LENGTH }),
});