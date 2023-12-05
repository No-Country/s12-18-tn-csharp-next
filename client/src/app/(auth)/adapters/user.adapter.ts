import { AuthUser } from "@/app/(auth)/models";

export const authUserAdapter = (data: any): AuthUser => ({
    token: data.jwt,
    user: {
        name: data.user.name,
        dni: data.user.dni,
        dateOfBirth: data.user.date_of_birth,
        gender: data.user.gender
    }
});