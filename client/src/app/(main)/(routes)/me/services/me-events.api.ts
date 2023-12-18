import { MeApi } from "@/app/(main)/(routes)/me/services";
import { ME_API_ROUTES } from "@/app/(main)/(routes)/me/models";

/**
 * Api de eventos propios de la api de información de usuario.
 */
export const MeEventsApi = MeApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Petición de los eventos de ususario.
         */
        events: builder.query<null, void>({
            query: () => ME_API_ROUTES.EVENTS
        })
    })
});