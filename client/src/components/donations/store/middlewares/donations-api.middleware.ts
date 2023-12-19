import { donationApi } from "@/components/donations/services";

/**
 * Middleware de la api de donaciones.
 */
export const donationApiMiddleware = donationApi.middleware;