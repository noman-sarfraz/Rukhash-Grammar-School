import { Box, Grid, MenuItem, Typography } from "@mui/material";
import React from "react";
import StyledTextField from "../../components/styled/StyledTextField";
import StyledSelect from "../../components/styled/StyledSelect";
import StyledFileInput from "../../components/styled/StyledFileInput";
import StyledButton from "../../components/styled/StyledButton";
import logo from "../../assets/logo.jpg";
import StyledDatePicker from "../../components/styled/StyledDatePicker";
import ProfilePicture from "../../assets/studentProfilePic.gif";
import { useForm } from "react-hook-form";
import { useCreateTeacherMutation } from "../../features/teachers/teachersApiSlice";
import { toast } from "react-toastify";
import StyledLoadingButton from "../../components/styled/StyledLoadingButton";

const selectOptions = {
  branches: ["Rukhash Grammar School"],
  genders: ["Male", "Female", "Other"],
  status: ["Active", "Inactive"],
  countries: ["Pakistan"],
  roles: ["Teacher"],
};

function AddNewTeacher() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createTeacher, { isLoading, isSuccess, isError, error }] =
    useCreateTeacherMutation();

  const onSubmit = async (data) => {
    const res = await createTeacher(data);
    if (isError || !isSuccess || !res.data.teacher) {
      console.log(error)
      toast.error("Error: Couldn't add teacher.")
    } else {
      toast.success("Teacher added successfully.")
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Grid
          container
          rowGap={0.5}
          sx={{
            mt: 5,
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
                <StyledSelect
                  defaultValue={selectOptions.branches[0]}
                  {...register("branch")}
                >
                  {selectOptions.branches.map((branch, index) => (
                    <MenuItem key={index} value={branch}>
                      {branch}
                    </MenuItem>
                  ))}
                </StyledSelect>
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
                <StyledTextField {...register("code")}></StyledTextField>
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
                <StyledSelect
                  // defaultValue={selectOptions.genders[0]}
                  {...register("gender")}
                >
                  {selectOptions.genders.map((gender, index) => (
                    <MenuItem key={index} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </StyledSelect>
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
                <StyledTextField
                  {...register("firstName", { required: true })}
                  error={errors.firstName ? true : false}
                ></StyledTextField>
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
                <StyledTextField {...register("lastName")}></StyledTextField>
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
                <StyledTextField {...register("department")}></StyledTextField>
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
                <StyledTextField {...register("designation")}></StyledTextField>
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
                <StyledDatePicker
                  {...register("dateOfBirth")}
                ></StyledDatePicker>
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
                <StyledDatePicker
                  {...register("dateOfJoining")}
                ></StyledDatePicker>
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
                  {...register("address")}
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
                <StyledTextField {...register("city")}></StyledTextField>
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
                <StyledSelect
                  defaultValue={selectOptions.countries[0]}
                  {...register("country")}
                >
                  {selectOptions.countries.map((country, index) => (
                    <MenuItem key={index} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </StyledSelect>
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
                <StyledTextField {...register("phone")}></StyledTextField>
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
                <StyledTextField {...register("mobile")}></StyledTextField>
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
                <StyledTextField {...register("email")}></StyledTextField>
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
                <StyledTextField {...register("salary")}></StyledTextField>
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
                <StyledTextField
                  // disabled
                  // value="5396488@activeschools.pk"
                  {...register("loginId")}
                ></StyledTextField>
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
                Password:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField {...register("password")}></StyledTextField>
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
                Status / Role:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%", display: "flex" } }}>
                <StyledSelect
                  width="49%"
                  defaultValue={selectOptions.status[0]}
                  {...register("status")}
                >
                  {selectOptions.status.map((s, index) => (
                    <MenuItem key={index} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </StyledSelect>
                <StyledSelect
                  width="49%"
                  defaultValue={selectOptions.roles[0]}
                  {...register("role")}
                >
                  {selectOptions.roles.map((role, index) => (
                    <MenuItem key={index} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </StyledSelect>
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
                Picture:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                {/* <StyledFileInput></StyledFileInput> */}
                <StyledTextField {...register("picture")}></StyledTextField>
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
                mt: 2,
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
                  <img width="200px" src={ProfilePicture} alt="student" />
                </Box>
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
                mt: 2,
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledLoadingButton
                  loading={isLoading}
                  width="100%"
                  type="submit"
                >
                  Add Now
                </StyledLoadingButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default AddNewTeacher;
