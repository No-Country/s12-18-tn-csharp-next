import z from "zod";

import { DonationErrorModel } from "@/components/donations/models";

/**
 * Esquema de donación.
 */
export const donationSchema = z.object({
    amount: z.string({
        required_error: DonationErrorModel.MOUNT_REQUIRED,
        invalid_type_error: DonationErrorModel.INVALID_MOUNT,
    })
    .transform((value, ctx) => {
        /**
         * Conversión númerica del valor del monto.
         */
        const parsed = Number(value);

        // Si no es un valor númerico, devolvemos un error.
        if (isNaN(parsed)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: DonationErrorModel.INVALID_MOUNT
            });

            return z.NEVER;
        };

        // Si el valor es negativo, devolvemos un error.
        if (parsed < 0) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: DonationErrorModel.NEGATIVE_MOUNT
            });

            return z.NEVER;
        }

        return parsed;
    }),
    message: z.string({
        required_error: DonationErrorModel.MESSAGE_REQUIRED,
        invalid_type_error: DonationErrorModel.INVALID_MESSAGE
    }).min(5, { message: DonationErrorModel.MIN_MESSAGE })
});