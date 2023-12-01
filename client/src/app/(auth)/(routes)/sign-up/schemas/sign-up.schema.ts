import z from "zod";

import { Gendre } from "@/app/(auth)/models";

/**
 * Esquema del registro de usuario.
 */
export const signUpSchema = z.object({
    name: z.string().min(2, {
        message: "El Nombre debe tener un mínimo de 2 carácteres."
    }),
    email: z.string().email({ message: "El E-Mail es invalido." }),
    password: z.string().min(8, { message: "La contraseña debe tener un mínimo de 8 carácteres." }),
    dni: z.string().min(8, { message: "El DNI debe tener un mínimo de 8 carácteres." }),
    dateOfBirth: z.string().datetime({ message: "La Fecha es invalida." }),
    gendre: z.enum([Gendre.PREFER_NOT_TO_SAY, Gendre.FEMALE, Gendre.MALE])
});