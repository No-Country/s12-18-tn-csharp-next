import { UserInfoModel } from "@/app/(main)/(routes)/me/models";

/**
 * Función para adaptar la información del usuario.
 * 
 * @param { AuthUser } user - Usuario autenticado.
 * 
 * @returns { UserInfoModel } Información del usuario adaptada.
 */
export const userInfoAdapter = (user: any): UserInfoModel => ({
    name: user.name,
    dateOfBirth: new Date(user.dateOfBirth),
    gender: user.gender
});