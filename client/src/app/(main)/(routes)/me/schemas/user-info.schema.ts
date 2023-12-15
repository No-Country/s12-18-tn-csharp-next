import { signUpSchema } from "@/app/(auth)/(routes)/sign-up/schemas";

/**
 * Esquema de información del usuario.
 */
export const userInfoSchema = signUpSchema.omit({
    email: true,
    password: true 
})