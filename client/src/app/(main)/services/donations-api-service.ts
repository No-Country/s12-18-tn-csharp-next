"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "@/models";

import { BASE_API_DONATIONS_PATH } from "../models/";

export const donationsApi = createApi({
  reducerPath: "donations",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}${BASE_API_DONATIONS_PATH}`,
    prepareHeaders: (headers) => {
      const authDataString = localStorage.getItem("auth");
      if (authDataString) {
        const authData = JSON.parse(authDataString);
        const token = authData.token;

        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }

      return headers;
    },
  }),
  endpoints: (_builder) => ({}),
});
