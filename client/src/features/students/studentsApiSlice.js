import { apiSlice } from "../../app/api/apiSlice";

export const studentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => ({
        url: "/students",
        method: "GET",
      }),
      providesTags: ["Student"],
      // providesTags: (result, error, arg) =>
      //   result
      //     ? [
      //         result.students.map(({ id }) => ({ type: "Student", id })),
      //         "Student",
      //       ]
      //     : ["Student"],
    }),
    getStudent: builder.query({
      query: (id) => ({
        url: `/students/${id}`,
        method: "GET",
      }),
    }),
    getLastStudents: builder.query({
      query: () => ({
        url: "/students/last-added-students",
        method: "GET",
      }),
    }),
    createStudent: builder.mutation({
      query: (student) => ({
        url: "/students",
        method: "POST",
        body: { ...student },
      }),
      invalidatesTags: ["Student"],
      // invalidatesTags: (result, error, arg) => [
      //   { type: "Student", id: arg.id },
      // ],
    }),
    createManyStudents: builder.mutation({
      query: (students) => ({
        url: "/students/create-many",
        method: "POST",
        body: { students },
      }),
      invalidatesTags: ["Student"],

      // invalidatesTags: (result, error, arg) => [
      //   { type: "Student", id: arg.id },
      // ],
    }),
    updateStudent: builder.mutation({
      query: (data) => ({
        url: `/students/${data.id}`,
        method: "PATCH",
        body: data.student,
      }),
      invalidatesTags: ["Student"],

      // invalidatesTags: (result, error, arg) => [
      //   { type: "Student", id: arg.id },
      // ],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Student"],
      // invalidatesTags: (result, error, arg) => [
      //   { type: "Student", id: arg.id },
      // ],
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetStudentQuery,
  useGetLastStudentsQuery,
  useCreateStudentMutation,
  useCreateManyStudentsMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentsApiSlice;
