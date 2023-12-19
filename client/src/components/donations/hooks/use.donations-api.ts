import { donationsApi } from "@/components/donations/services";

// Hooks de la api de donaciónes.
export const { usePostDonationMutation, useGetDonationQuery } = donationsApi;