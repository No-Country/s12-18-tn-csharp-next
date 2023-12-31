import type { Event } from "@/components/props/props-card-lading/card-langing";
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
        events: builder.query<Event[], void>({
            query: () => ME_API_ROUTES.EVENTS
        })
    })
});