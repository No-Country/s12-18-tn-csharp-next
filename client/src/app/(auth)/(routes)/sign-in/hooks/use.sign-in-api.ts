import { signInApi } from "@/app/(auth)/(routes)/sign-in/services";

// Hook de la api de autenticación.
export const { useSignInMutation } = signInApi;