/**
 * Modelo del usuario a registrar en la api de autenticación.
 */
export interface UserToRegister {
    dni: string;
    name: string;
    email: string;
    password: string;
    dateOfBirth: string;
    gender: string;
};