import { apiSlice } from "../../app/api/apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (body) => ({
        url: "/admins/change-password",
        method: "PATCH",
        body,
      }),
    }),
    getSchool: builder.query({
      query: () => ({
        url: "/admins",
        method: "GET",
      }),
    }),
    updateSchool: builder.mutation({
      query: (body) => ({
        url: "/admins",
        method: "PATCH",
        body
      }),
    }),
  }),
});

export const {
  useChangePasswordMutation,
  useGetSchoolQuery,
  useUpdateSchoolMutation,
} = adminApiSlice;
