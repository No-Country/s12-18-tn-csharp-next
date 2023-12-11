import { eventApi } from "@/app/(main)/services/event-api-service";

import { HTTP_METHODS } from "@/models";


interface EventData {
  title: string;
  description: string;
  collect_Goal: number;
  collected: number;
  geo: {
    country: string;
    provice: string;
    city: string;
    lat: number;
    long: number;
  };
}

// const getTokenFromLocalStorage = () => {
//   const authDataString = localStorage.getItem('auth');
//   if (authDataString) {
//     const authData = JSON.parse(authDataString);
//     return authData.token;
//   }
//   return null;
// };

// const token = getTokenFromLocalStorage()

export const postEventApi = eventApi.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation<EventData, Partial<EventData>>({
      query: (eventData) => ({
        url: "/",
        method: HTTP_METHODS.POST,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        //   "Content-Type": "application/json",
        // },
        body: eventData,
      }),
    }),
  }),
});
