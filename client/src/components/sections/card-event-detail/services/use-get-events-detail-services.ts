import { eventApi } from "@/app/(main)/services/event-api-service";


export const getEventApiDetail = eventApi.injectEndpoints({
  endpoints: (builder) => ({
    getEventById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});
