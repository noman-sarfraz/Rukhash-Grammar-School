import { apiSlice } from "../../app/api/apiSlice";

export const teachersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeachers: builder.query({
      query: () => ({
        url: "/teachers",
        method: "GET",
      }),
      providesTags: ["Teacher"],
      // providesTags: (result, error, arg) =>
      //   result
      //     ? [
      //         result.teachers.map(({ id }) => ({ type: "Teacher", id })),
      //         "Teacher",
      //       ]
      //     : ["Teacher"],
    }),
    getTeacher: builder.query({
      query: (id) => ({
        url: `/teachers/${id}`,
        method: "GET",
      }),
    }),
    createTeacher: builder.mutation({
      query: (teacher) => ({
        url: "/teachers",
        method: "POST",
        body: { ...teacher },
      }),
      invalidatesTags: ["Teacher"],
      // invalidatesTags: (result, error, arg) => [
      //   { type: "Teacher", id: arg.id },
      // ],
    }),
    updateTeacher: builder.mutation({
      query: (data) => ({
        url: `/teachers/${data.id}`,
        method: "PATCH",
        body: data.teacher,
      }),
      invalidatesTags: ["Teacher"],
      // invalidatesTags: (result, error, arg) => [
      //   { type: "Teacher", id: arg.id },
      // ],
    }),
    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `/teachers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Teacher"],
      // invalidatesTags: (result, error, arg) => [
      //   { type: "Teacher", id: arg.id },
      // ],
    }),
  }),
});

export const {
  useCreateTeacherMutation,
  useGetAllTeachersQuery,
  useDeleteTeacherMutation,
  useGetTeacherQuery,
  useUpdateTeacherMutation,
} = teachersApiSlice;
