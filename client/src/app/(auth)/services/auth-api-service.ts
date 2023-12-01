import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Servicio de la api de autenticación.
 */
export const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: `any`
    }),
    endpoints: (_builder) => ({})
});