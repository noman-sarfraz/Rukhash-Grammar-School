import { Box, Grid } from "@mui/material";
import React from "react";
import { useGetAllTeachersQuery } from "../../features/teachers/teachersApiSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TeachersListContents from "../../components/admin/teachers/TeachersListContents";
import StyledButton from "../../components/styled/StyledButton";
import AddIcon from "@mui/icons-material/Add";
import CircularLoader from "../../components/Loaders/CircularLoader";
function TeachersList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllTeachersQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let teachers;
  if (isLoading) {
    return <CircularLoader />;
  }
  if (isError) {
    console.log(error);
    return <h1>Error</h1>;
  }
  if (!isLoading && !isError && isSuccess) {
    teachers = data.teachers;
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            mt: 0.5,
            pb: 0.5,
            borderBottom: "1px solid #efefef",
          }}
        >
          <StyledButton href="/admin/add-new-teacher">
            <AddIcon sx={{ fontSize: 18 }} />
            Add New
          </StyledButton>
        </Box>

        <TeachersListContents teachers={teachers} />
      </Box>
    );
  }
}

export default TeachersList;
