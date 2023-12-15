import { User } from "@/app/(auth)/models";
import { UserInfoModel } from "@/app/(main)/(routes)/me/models";

/**
 * Función para adaptar la información del usuario.
 * 
 * @param { AuthUser } user - Usuario autenticado.
 * 
 * @returns { UserInfoModel } Información del usuario adaptada.
 */
export const userInfoAdapter = (user: User): UserInfoModel => ({
    name: user.name,
    dni: user.dni,
    dateOfBirth: new Date(user.dateOfBirth),
    gender: user.gender
});