import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StyledButton from "../../components/styled/StyledButton";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import StyledFieldHeading from "../../components/styled/FieldHeading";
import StyledSelect from "../../components/styled/StyledSelect";
import StyledTextField from "../../components/styled/StyledTextField";
import studentProfilePic from "./../../assets/studentProfilePic.gif";
import FeePendingVouchers from "../../components/admin/Tables/FeePendingVouchers";
import { useParams } from "react-router-dom";
import { useGetStudentQuery } from "../../features/students/studentsApiSlice";

function ViewStudent() {
    const { id } = useParams();
    const { data, isLoading, isError, isSuccess, error } =
      useGetStudentQuery(id);
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (isError || !data.student) {
      console.log(error);
      return <h1>Error</h1>;
    }

    let student;
    if (isSuccess) {
      student = data.student;
    }

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
        <StyledButton href={`/admin/update-student/${student._id}`}>
          <EditIcon sx={{ fontSize: 16, mr: 0.5 }} />
          Update Details
        </StyledButton>
      </Box>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 1,
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: 2,
            py: 1,
            bgcolor: "#e3f2fd",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Student Profile
          </Typography>
        </Box>
        <Box sx={{ px: 2, py: 1, mt: 1, mb: 2 }}>
          <Grid container>
            <Grid item xs={12} md={9}>
              <Grid container sx={{ mb: 1 }} rowGap={1}>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Reg / Enrollment #</StyledFieldHeading>
                  <StyledTextField value={student.regNo}></StyledTextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Roll #</StyledFieldHeading>
                  <StyledTextField value={student.rollNo}></StyledTextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Family #</StyledFieldHeading>
                  <StyledTextField value=""></StyledTextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Student Name</StyledFieldHeading>
                  <StyledTextField
                    value={student.name}
                  ></StyledTextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Father Name</StyledFieldHeading>
                  <StyledTextField value={student.fatherName}></StyledTextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Mother Name</StyledFieldHeading>
                  <StyledTextField
                    readonly
                    value={student.motherName}
                  ></StyledTextField>
                </Grid>

                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Gender</StyledFieldHeading>
                  <StyledTextField value={student.gender}></StyledTextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Date of birth</StyledFieldHeading>
                  <StyledTextField
                    value={student.dateOfBirth}
                  ></StyledTextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Admission Date</StyledFieldHeading>
                  <StyledTextField
                    value={student.admissionDate}
                  ></StyledTextField>
                </Grid>

                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Class</StyledFieldHeading>
                  <StyledTextField value={student.class}></StyledTextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Religion</StyledFieldHeading>
                  <StyledTextField value={student.religion}></StyledTextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Blood Group</StyledFieldHeading>
                  <StyledTextField value={student.bloodGroup}></StyledTextField>
                </Grid>

                <Grid item xs={12} md={8}>
                  <StyledFieldHeading>Discharge Comments</StyledFieldHeading>
                  <StyledTextField value=""></StyledTextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledFieldHeading>Discharge Date</StyledFieldHeading>
                  <StyledTextField value=""></StyledTextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={studentProfilePic}
                width="150px"
                height="150px"
                alt="student"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 1,
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: 2,
            py: 1,
            bgcolor: "#e3f2fd",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Contacts / Fee Structure
          </Typography>
        </Box>
        <Box sx={{ px: 2, py: 1, mt: 1, mb: 2 }}>
          <Grid container sx={{ mb: 1 }} rowGap={1}>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Phone (Office)</StyledFieldHeading>
              <StyledTextField value={student.phoneOffice}></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Phone (Res)</StyledFieldHeading>
              <StyledTextField value={student.phoneResidence}></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Mobile (Office : SMS)</StyledFieldHeading>
              <StyledTextField value={student.mobileOffice}></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Mobile (Res)</StyledFieldHeading>
              <StyledTextField value={student.mobileResidence}></StyledTextField>
            </Grid>

            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Email</StyledFieldHeading>
              <StyledTextField
                value={student.email}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>CNIC</StyledFieldHeading>
              <StyledTextField value={student.cnicNo}></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>B Form #</StyledFieldHeading>
              <StyledTextField value={student.bFormNo}></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Identity</StyledFieldHeading>
              <StyledTextField value=""></StyledTextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledFieldHeading>Address</StyledFieldHeading>
              <StyledTextField
                value={student.address}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>City</StyledFieldHeading>
              <StyledTextField value={student.city}></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Country</StyledFieldHeading>
              <StyledTextField value={student.country}></StyledTextField>
            </Grid>

            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Monthly / Tution Fee</StyledFieldHeading>
              <StyledTextField value={student.monthlyFee}></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Admission Fee</StyledFieldHeading>
              <StyledTextField value={student.admissionFee}></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Transport Fee</StyledFieldHeading>
              <StyledTextField value={student.transportFee}></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Routes / Area</StyledFieldHeading>
              <StyledTextField value={student.routes}></StyledTextField>
            </Grid>

            <Grid item xs={12} md={12}>
              <StyledFieldHeading>Comments / Detail</StyledFieldHeading>
              <StyledTextField value={student.comments}></StyledTextField>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 1,
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: 2,
            py: 1,
            bgcolor: "#e3f2fd",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Parent Login Detail
          </Typography>
        </Box>
        <Box sx={{ px: 2, py: 1, mt: 1, mb: 2 }}>
          <Grid container sx={{ mb: 1 }} rowGap={1}>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Login ID</StyledFieldHeading>
              <StyledTextField
                value={student.loginId}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Password</StyledFieldHeading>
              <StyledTextField value=""></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Login Status</StyledFieldHeading>
              <StyledTextField value={student.loginStatus}></StyledTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFieldHeading>Status</StyledFieldHeading>
              <StyledTextField value={student.status}></StyledTextField>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 1,
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: 2,
            py: 1,
            bgcolor: "#e3f2fd",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Parent Login Detail
          </Typography>
        </Box>
        <Box sx={{ px: 2, py: 1, mt: 1, mb: 2 }}>
          <FeePendingVouchers />
        </Box>
      </Box> */}
    </Box>
  );
}

export default ViewStudent;
