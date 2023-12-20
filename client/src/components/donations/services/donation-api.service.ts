import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_API_DONATION_PATH } from "@/components/donations/models";
import { BASE_URL } from "@/models";

/**
 * Servicio de la api de donaciones.
 */
export const donationApi = createApi({
    reducerPath: "donationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}${BASE_API_DONATION_PATH}`
    }),
    endpoints: (_builder) => ({})
});