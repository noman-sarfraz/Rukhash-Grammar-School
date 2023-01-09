import { Box, Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import StyledFieldHeading from "../../components/styled/FieldHeading";
import StyledSelect from "../../components/styled/StyledSelect";
import StyledTextField from "../../components/styled/StyledTextField";
import EnrollmentMultipleStudentsTable from "../../components/admin/Tables/EnrollmentMultipleStudents";
import StyledButton from "../../components/styled/StyledButton";
import { useGetLastStudentsQuery } from "../../features/students/studentsApiSlice";
import { toast } from "react-toastify";
import RegNoSuggestion from "../../utils/RegNoSuggestion";

const selectOptions = {
  classes: [
    "PLAY GROUP",
    "KG (JUNIORS)",
    "KG (SENIORS)",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
  ],
  genders: ["Male", "Female", "Other"],
};

const setText = (id, value) => {
  document.getElementById(`${id}`).value = value;
};

function EnrollmentMultipleStudents() {

  const {
    data,
    isLoading: isLSloading,
    isSuccess: isLSuccess,
    isError: isLSError,
    error: lSError,
  } = useGetLastStudentsQuery();

  let latestStudent, lastStudents;
  
  if (isLSloading) return <h1>Loading...</h1>;
  if (isLSError) {
    toast.error("Error: Couldn't fetch last added student!");
    return <h1>Error</h1>;
  }

  if (isLSuccess) {
    // console.log(data, error);
    latestStudent = data.latestStudent;
    lastStudents = data.lastStudents;
  }

  return (
    <Box>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 1,
          px: 1,
          py: 2,
          mt: 1,
          mb: 2,
        }}
      >
        <Grid container sx={{ mb: 1 }} rowGap={1}>
          <Grid item xs={12} sm={6} lg={3}>
            <StyledFieldHeading>Class Name</StyledFieldHeading>
            <StyledSelect
              defaultValue={latestStudent["class"]}
              onChange={(e) => {
                const classNam = e.target.value;
                setText(
                  "lastStudentRegNo",
                  lastStudents[classNam] ? lastStudents[classNam].regNo : "N/A"
                );
                setText(
                  "lastStudentRollNo",
                  lastStudents[classNam] ? lastStudents[classNam].rollNo : "N/A"
                );
                setText(
                  "lastStudentName",
                  lastStudents[classNam] ? lastStudents[classNam].name : "N/A"
                );
              }}
            >
              {selectOptions.classes.map((className, index) => (
                <MenuItem key={index} value={className}>
                  {className}
                </MenuItem>
              ))}
            </StyledSelect>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <StyledFieldHeading>Last Reg / Enrollment #</StyledFieldHeading>
            <StyledTextField
              disabled
              defaultValue={latestStudent["regNo"]}
              id="lastStudentRegNo"
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <StyledFieldHeading>Last Roll #</StyledFieldHeading>
            <StyledTextField
              disabled
              defaultValue={latestStudent["rollNo"]}
              id="lastStudentRollNo"
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <StyledFieldHeading>Last Student Name</StyledFieldHeading>
            <StyledTextField
              disabled
              defaultValue={latestStudent["name"]}
              id="lastStudentName"
            ></StyledTextField>
          </Grid>
        </Grid>

        <EnrollmentMultipleStudentsTable lastRegNo = {RegNoSuggestion(latestStudent['regNo'])} />
      </Box>
      {/* <StyledButton responsiveWidth={{ xs: "100%", md: "25%" }}>
        Add new
      </StyledButton> */}
    </Box>
  );
}

export default EnrollmentMultipleStudents;
