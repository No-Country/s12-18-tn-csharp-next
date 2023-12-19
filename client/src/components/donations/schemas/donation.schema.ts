import z from "zod";

import { DonationErrorModel } from "@/components/donations/models";

/**
 * Esquema de donación.
 */
export const donationSchema = z.object({
    amount: z.number({
        required_error: DonationErrorModel.MOUNT_REQUIRED,
        invalid_type_error: DonationErrorModel.INVALID_MOUNT,
    }).min(1, { message: DonationErrorModel.MIN_MOUNT })
    .negative({ message: DonationErrorModel.NEGATIVE_MOUNT }),
    message: z.string({
        required_error: DonationErrorModel.MESSAGE_REQUIRED,
        invalid_type_error: DonationErrorModel.INVALID_MESSAGE
    }).min(5, { message: DonationErrorModel.MIN_MESSAGE })
});