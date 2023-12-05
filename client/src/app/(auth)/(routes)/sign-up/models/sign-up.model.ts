import z from "zod";

import { signUpSchema } from "@/app/(auth)/(routes)/sign-up/schemas";
import { Gender } from "@/app/(auth)/models";
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
    gender: Gender.PREFER_NOT_TO_SAY,
    dateOfBirth: validDate
};