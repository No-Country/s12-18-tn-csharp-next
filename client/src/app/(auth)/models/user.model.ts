/**
 * Enumeración del modelo de géneros en la aplicación.
 */
export enum Gendre {
    PREFER_NOT_TO_SAY = "I prefer not to say",
    MALE = "male",
    FEMALE = "female"
}

/**
 * Modelo del usuario a registrar en la api de autenticación.
 */
export interface UserToRegister {
    dni: string;
    name: string;
    email: string;
    password: string;
    dateOfBirth: string;
    gender: Gendre;
};