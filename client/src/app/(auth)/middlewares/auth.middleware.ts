import { authApi } from "../services";

/**
 * Middleware de la api de autenticación.
 */
export const authMiddleware = authApi.middleware;