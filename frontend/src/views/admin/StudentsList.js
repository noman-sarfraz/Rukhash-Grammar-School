import React from "react";
import { Box, Grid } from "@mui/material";
import StudentsListTable from "../../components/admin/Tables/StudentsList";
import StyledButton from "../../components/styled/StyledButton";
import StyledSelect from "../../components/styled/StyledSelect";
import StyledDatePicker from "../../components/styled/StyledDatePicker";
import StyledTextField from "../../components/styled/StyledTextField";
import AddIcon from "@mui/icons-material/Add";
import { useGetAllStudentsQuery } from "../../features/students/studentsApiSlice";
import StudentsListContents from "../../components/admin/students/StudentsListContents";
import CircularLoader from "../../components/Loaders/CircularLoader";

function StudentsList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllStudentsQuery();

  let students;
  if (isLoading) {
    return <CircularLoader />;
  }
  if (isError) {
    console.log(error);
    return <h1>Error</h1>;
  }
  if (!isLoading && !isError && isSuccess) {
    students = data.students;
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
          <StyledButton href="/admin/new-student-enrollment">
            <AddIcon sx={{ fontSize: 18 }} />
            New Enrollment
          </StyledButton>
        </Box>

        <StudentsListContents students={students} />
      </Box>
    );
  }
}

export default StudentsList;
