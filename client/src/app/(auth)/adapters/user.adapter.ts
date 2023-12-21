import type { AuthUser } from "@/app/(auth)/models";

/**
 * Función para adaptar los datos de respuesta a una autenticación.
 * 
 * @param data - Respuesta a adaptar.
 * 
 * @returns { AuthUser } - Usuario adaptado a la aplicación.
 */
export const authUserAdapter = (data: any): AuthUser => ({
    token: data.jwt,
    user: {
        name: data.user.name,
        dni: data.user.dni,
        dateOfBirth: data.user.date_Of_Birth,
        gender: data.user.gender
    }
});