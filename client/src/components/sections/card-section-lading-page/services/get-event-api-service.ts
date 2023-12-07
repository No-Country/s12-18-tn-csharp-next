import { eventApi } from "@/app/(main)/services/event-api-service";

export const getEventApi = eventApi.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "/",
    })
    // getEventById: builder.query({
    //   query: (id) => `/${id}`,
    // }),
  }),
});
