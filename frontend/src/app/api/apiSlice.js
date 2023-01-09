import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { SERVER_BASE_URL } from "../../config/index.js";

const baseQuery = fetchBaseQuery({
  baseUrl: `https://rukhash-api.up.railway.app/api/v1/`,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Student", "Teacher"],
  endpoints: (builder) => ({}),
});
