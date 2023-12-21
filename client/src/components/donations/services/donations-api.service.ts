import type { DonationModel, EventIdProps } from "@/components/donations/models";
import { donationApi } from "@/components/donations/services";
import { donationAdapter } from "@/components/donations/adapters";
import { HTTP_METHODS } from "@/models";

/**
 * Servicio de las funcionaliades de la api de donaciones.
 */
export const donationsApi = donationApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Petición para enviar una donación a un evento específico.
         */
        postDonation: builder
            .mutation<any, DonationModel & Pick<EventIdProps, "eventId">>(
                {
                    query: ({ eventId, ...body }) => ({
                        url: `/${eventId}`,
                        method: HTTP_METHODS.POST,
                        body: donationAdapter(body)
                    })
                }
            ),
        /**
         * Petición para obtener una donación específica.
         */
        getDonation: builder.query<any, number>({
            query: (id) => `/${id}`
        })
    })
});