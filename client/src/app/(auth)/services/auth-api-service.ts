import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {} from "react-persist";

import { BASE_URL } from "@/models";
import { BASE_API_AUTH_PATH } from "@/app/(auth)/models";

/**
 * Servicio de la api de autenticación.
 */
export const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}${BASE_API_AUTH_PATH}`
    }),
    endpoints: (_builder) => ({}),
    // extractRehydrationInfo: (action, { reducerPath, }) => {
    //     if (action.type ===)
    // },
});