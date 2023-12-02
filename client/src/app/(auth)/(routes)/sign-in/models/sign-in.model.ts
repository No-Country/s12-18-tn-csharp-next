import z from "zod";

import { signInSchema } from "@/app/(auth)/(routes)/sign-in/schemas";

/**
 * Modelo del esquema de autenticación de usuario.
 */
export type SignInSchema = z.infer<typeof signInSchema>;