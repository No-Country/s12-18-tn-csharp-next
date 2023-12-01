import z from "zod";
import { signUpSchema } from "@/app/(auth)/(routes)/sign-up/schemas";

/**
 * Modelo del esquema de registro de usuario.
 */
export type SignUpSchema = z.infer<typeof signUpSchema>;