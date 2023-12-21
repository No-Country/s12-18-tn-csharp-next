import { donationApi } from "@/components/donations/services";

/**
 * Reducer de la api de donaciones.
 */
export const donationApiReducer = {
    [donationApi.reducerPath]: donationApi.reducer
};