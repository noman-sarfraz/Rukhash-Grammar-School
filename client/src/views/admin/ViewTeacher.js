import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StyledTextField from "../../components/styled/StyledTextField";
import StyledSelect from "../../components/styled/StyledSelect";
import StyledFileInput from "../../components/styled/StyledFileInput";
import StyledButton from "../../components/styled/StyledButton";
import logo from "../../assets/logo.jpg";
import StyledDatePicker from "../../components/styled/StyledDatePicker";
import ProfilePicture from "../../assets/studentProfilePic.gif";
import { useGetTeacherQuery } from "../../features/teachers/teachersApiSlice";
import { useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

function ViewTeacher() {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess, error } = useGetTeacherQuery(id);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError || !data.teacher) {
    console.log(error);
    return <h1>Error</h1>;
  }

  let teacher;
  if (isSuccess) {
    teacher = data.teacher;
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          pt: 2,
          pb: 1,
          borderBottom: "1px solid #efefef",
        }}
      >
        <StyledButton
          href={`/admin/edit-teacher/${teacher._id}`}
        >
          <FiEdit style={{ marginRight: 8 }} size={14} />
          Edit Teacher
        </StyledButton>
      </Box>
      <Grid
        container
        rowGap={0.5}
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Branch / Location:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.branch}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", md: "block" } }}
        ></Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Code:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.code}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Gender:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.gender}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              First Name:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.firstName}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Last Name:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.lastName}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Department:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.department}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Designation:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.designation}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Date of Birth:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.dateOfBirth}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Date of Joining:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.dateOfJoining}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Address:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField
                multiline
                rows="2"
                value={teacher.address}
              ></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", md: "block" } }}
        ></Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              City:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.city}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Country:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.country}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Phone:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.phone}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Mobile:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.mobile}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Email:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.email}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Salary:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.salary}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Login ID:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField value={teacher.loginId}></StyledTextField>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Password:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <StyledTextField></StyledTextField>
            </Box>
          </Box> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              flexDirection: { xs: "column", md: "row" },
              width: "95%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
            >
              Status / Role:
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "60%", display: "flex" } }}>
              <StyledTextField
                width="49%"
                value={teacher.status}
              ></StyledTextField>
              <StyledTextField
                value={teacher.role}
                width="49%"
              ></StyledTextField>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", md: "block" } }}
        ></Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sx: "left", md: "right" },
              width: "95%",
              mt: 1,
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "60%",
                },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img width="200px" src={ProfilePicture} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ViewTeacher;
