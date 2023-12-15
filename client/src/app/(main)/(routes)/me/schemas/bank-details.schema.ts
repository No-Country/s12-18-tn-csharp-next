import z from "zod";

import { userInfoSchema } from "@/app/(main)/(routes)/me/schemas";
import { BankDetailsErrorModel } from "@/app/(main)/(routes)/me/models";

export const bankDetailsSchema = z.object({
    accountNumber: z.number({
        required_error: "Invalid require",
        invalid_type_error: ""
    }),
    type: z.string(),
    bank: z.string()
});