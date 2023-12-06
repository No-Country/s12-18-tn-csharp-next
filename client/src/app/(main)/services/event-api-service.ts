import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "@/models";

import { BASE_API_EVENT_PATH } from "../models/";

export const eventApi = createApi({
  reducerPath: "events",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}${BASE_API_EVENT_PATH}`,
  }),
  endpoints: (_builder) => ({}),
});
