import { SignUpSchema } from "@/app/(auth)/(routes)/sign-up/models";

/**
 * Modelo de la información del usuario.
 */
export type UserInfoModel = Omit<SignUpSchema, "email" | "password">;
