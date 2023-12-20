import z from "zod";

import { donationSchema } from "@/components/donations/schemas";

/**
 * Modelo del esquema de donaciones.
 */
export type DonationModel = z.infer<typeof donationSchema>;

/**
 * Modelo de los valores por defecto de una donación.
 */
export const EmptyDonation: DonationModel = {
    amount: "" as unknown as number,
    message: ""
};