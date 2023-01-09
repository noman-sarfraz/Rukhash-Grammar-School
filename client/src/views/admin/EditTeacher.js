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
import { toast } from "react-toastify";
import StyledLoadingButton from "../../components/styled/StyledLoadingButton";
import { useParams } from "react-router-dom";
import {
  useGetTeacherQuery,
  useUpdateTeacherMutation,
} from "../../features/teachers/teachersApiSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";

const selectOptions = {
  branches: ["Rukhash Grammar School"],
  genders: ["Male", "Female", "Other"],
  status: ["Active", "Inactive"],
  countries: ["Pakistan"],
  roles: ["Teacher"],
};

function EditTeacher() {
  const { id } = useParams();
  const {
    data: GTdata,
    isLoading: isGTLoading,
    isSuccess: isGTSuccess,
    isError: isGTError,
    error: GTError,
  } = useGetTeacherQuery(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [updateTeacher, { isLoading, error }] = useUpdateTeacherMutation();

  const onSubmit = async (data) => {
    // console.log(data);
    // console.log("id:", id);
    const res = await updateTeacher({ id, teacher: data });
    if (res.data?.teacher) {
      toast.success("Teacher updated successfully!");
      console.log(res.data.teacher);
    } else {
      console.log(error);
      toast.error("Error: Couldn't update teacher!");
    }
  };

  if (isGTLoading) return <h1>Loading...</h1>;
  if (isGTError || !isGTSuccess || !GTdata.teacher)
    return <h1>Error: Couldn't fetch teacher data!</h1>;
  let teacher = GTdata.teacher;

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
        <StyledButton href={`/admin/teachers-list/`}>
          <VisibilityIcon sx={{ fontSize: 16, mr: 1 }} />
          View Teachers List
        </StyledButton>
      </Box>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Grid
          container
          rowGap={0.5}
          sx={{
            mt: 3,
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
                  defaultValue={teacher.branch}
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
                <StyledTextField
                  defaultValue={teacher.code}
                  {...register("code")}
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
                Gender:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledSelect
                  defaultValue={teacher.gender}
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
                  defaultValue={teacher.firstName}
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
                <StyledTextField
                  defaultValue={teacher.lastName}
                  {...register("lastName")}
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
                Department:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={teacher.department}
                  {...register("department")}
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
                Designation:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={teacher.designation}
                  {...register("designation")}
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
                Date of Birth:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledDatePicker
                  defaultValue={teacher.dateOfBirth}
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
                  defaultValue={teacher.dateOfJoining}
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
                  defaultValue={teacher.address}
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
                <StyledTextField
                  defaultValue={teacher.city}
                  {...register("city")}
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
                Country:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledSelect
                  defaultValue={teacher.country}
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
                <StyledTextField
                  defaultValue={teacher.phone}
                  {...register("phone")}
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
                Mobile:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={teacher.mobile}
                  {...register("mobile")}
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
                Email:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={teacher.email}
                  {...register("email")}
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
                Salary:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={teacher.salary}
                  {...register("salary")}
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
                Login ID:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={teacher.loginId}
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
                Picture:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField {...register("picture")}></StyledTextField>
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
                  defaultValue={teacher.status}
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
                  defaultValue={teacher.role}
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
              {/* <Typography
                variant="body2"
                sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
              >
                Picture:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField {...register("picture")}></StyledTextField>
              </Box> */}
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
                  Update Now
                </StyledLoadingButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default EditTeacher;
