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
export const EmptyUser: AuthUser = {
    token: "",
    user: {
        name: "",
        dni: "",
        dateOfBirth: "" as unknown as Date,
        gender: "" as Gender
    }
};

/**
 * Modelo de la información del usuario autenticado.
 */
export type User = Omit<SignUpSchema, "password" | "email">;

/**
 * Modelo de un usuario autenticado.
 */
export interface AuthUser {
    token: string;
    user: User;
}