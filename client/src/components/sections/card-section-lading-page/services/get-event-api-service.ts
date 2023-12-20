import { eventApi } from "@/app/(main)/services/event-api-service";

export const getEventApi = eventApi.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "/",
    }),
    getFilteredEvents: builder.query({
      query: (params) => `/?${params}`,
    }),
  }),
});
