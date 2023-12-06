import { SignUpSchema } from "@/app/(auth)/(routes)/sign-up/models";

/**
 * Enumeración del modelo de géneros en la aplicación.
 */
export enum Gender {
    PREFER_NOT_TO_SAY = "I prefer not to say",
    MALE = "male",
    FEMALE = "female"
}

/**
 * Modelo del usuario anonimo.
 */
export const EmptyUser = {
    token: "",
    user: {
        name: "",
        dni: "",
        dateOfBirth: "",
        gender: ""
    }
};

/**
 * Modelo de un usuario autenticado.
 */
export interface AuthUser {
    token: string;
    user: Omit<SignUpSchema, "password" | "email">;
}