import z from "zod";

import { signUpSchema } from "@/app/(auth)/(routes)/sign-up/schemas";
import { Gendre } from "@/app/(auth)/models";
import { validDate } from "./date.model";

/**
 * Modelo del esquema de registro de usuario.
 */
export type SignUpSchema = z.infer<typeof signUpSchema>;

/**
 * Valores por defecto del formulario de registro.
 */
export const signUpDefaultValues = {
    name: "",
    email: "",
    password: "",
    dni: "",
    gendre: Gendre.PREFER_NOT_TO_SAY,
    dateOfBirth: validDate
};