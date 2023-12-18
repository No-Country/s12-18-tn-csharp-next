import { BankDetailsModel } from "@/app/(main)/(routes)/me/models";
import { SignUpSchema } from "@/app/(auth)/(routes)/sign-up/models";

/**
 * Modelo de la información del usuario.
 */
export type UserInfoModel = Omit<SignUpSchema, "email" | "password" | "dni">;

/**
 * Modelo completo del usuario actualizado.
 */
export interface UpdatedUserInfo extends UserInfoModel {
    bankDetails: BankDetailsModel;
}