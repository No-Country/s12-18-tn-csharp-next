import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL, RootState } from "@/models";
import { BASE_API_ME_PATH } from "@/app/(main)/(routes)/me/models";

/**
 * Servicio de la api de información de usuario.
 */
export const MeApi = createApi({
    reducerPath: "meApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}${BASE_API_ME_PATH}`,
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