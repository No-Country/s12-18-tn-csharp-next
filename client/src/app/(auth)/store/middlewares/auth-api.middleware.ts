import { authApi } from "@/app/(auth)/services";

/**
 * Middleware de la api de autenticación.
 */
export const authApiMiddleware = authApi.middleware;