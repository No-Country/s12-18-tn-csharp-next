import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_API_DONATION_PATH } from "@/components/donations/models";
import { BASE_URL, RootState } from "@/models";

/**
 * Servicio de la api de donaciones.
 */
export const donationApi = createApi({
    reducerPath: "donationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}${BASE_API_DONATION_PATH}`,
        prepareHeaders: (headers, { getState }) => {
            // Obtenemos los datos de autenticación del estado global.
            const { auth } = getState() as RootState;

            // Si el token existe, asignamos el token a la cabecera de autorización.
            if (auth.token)
                headers.set("Authorization", `Bearer ${auth.token}`);

            return headers;
        }
    }),
    endpoints: (_builder) => ({})
});