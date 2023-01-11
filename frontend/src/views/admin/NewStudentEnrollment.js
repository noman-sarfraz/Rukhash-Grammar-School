import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Icon,
  MenuItem,
  TextField,
  useTheme,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import StyledButton from "../../components/styled/StyledButton";
import StyledTextField from "../../components/styled/StyledTextField";
import StyledDatePicker from "../../components/styled/StyledDatePicker";
import StyledSelect from "../../components/styled/StyledSelect";
import StyledFileInput from "../../components/styled/StyledFileInput";
import StyledFieldHeading from "../../components/styled/FieldHeading";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import StyledLoadingButton from "../../components/styled/StyledLoadingButton";
import { useCreateStudentMutation } from "../../features/students/studentsApiSlice";
import { useGetLastStudentsQuery } from "../../features/students/studentsApiSlice";
import { toast } from "react-toastify";
import Asterisk from "../../components/common/Asterisk";
import RegNoSuggestion from "../../utils/RegNoSuggestion";
import CircularLoader from "../../components/Loaders/CircularLoader";

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
  categories: ["Normal", "Special"],
  religions: ["Islam", "Hindu", "Christian", "Sikh", "Others"],
  bloodGroups: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  studentStatuses: ["Active", "Inactive"],
  countries: ["Pakistan"],
  routes: [],
  loginStatuses: ["Active", "Inactive"],
};

const setText = (id, value) => {
  document.getElementById(`${id}`).value = value;
};

function NewStudentEnrollment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createStudent, { isLoading, isSuccess, isError, error }] =
    useCreateStudentMutation();
  const {
    data,
    isLoading: isLSloading,
    isSuccess: isLSuccess,
    isError: isLSError,
    error: lSError,
  } = useGetLastStudentsQuery();

  let latestStudent, lastStudents;

  const onSubmit = async (data) => {
    const res = await createStudent(data);
    if(isError || !isSuccess || !res.data.student) {
      console.log(error)
      toast.error("Error: Couldn't add student.")
    } else {
      toast.success("Student added Successfully.")
    }    
  };

  if (isLSloading) return <CircularLoader />;
  if (isLSError) {
    toast.error("Error: Couldn't fetch last added student!");
    return <h1>Error</h1>;
  }

  if (isLSuccess) {
    // console.log(data, error);
    latestStudent = data.latestStudent;
    lastStudents = data.lastStudents;
  }

  if (isError) {
    toast.error("Error: Couldn't add student!");
    console.log(error);
  }

  return (
    <Box>
      {/* ============================================ */}
      {/* ============ || PAGE LINKS || ==================== */}
      {/* ============================================ */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          mt: 0.5,
          pb: 0.5,
          borderBottom: "1px solid #efefef",
        }}
      >
        <StyledButton href="/admin/enrollment-multiple-students">
          <AddIcon sx={{ fontSize: 18 }} />
          Enrollment Multiple Students
        </StyledButton>
      </Box>

      {/* ============================================ */}
      {/* ============ || LAST ADMISSION INFO || ==================== */}
      {/* ============================================ */}

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
                // e.target.value = lastStudents[classNam].class;
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
      </Box>

      {/* ============================================ */}
      {/* ============ || FORM || ==================== */}
      {/* ============================================ */}

      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
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
              <StyledFieldHeading>
                Reg / Enrollment # <Asterisk />
              </StyledFieldHeading>
              <StyledTextField
                error={errors.regNo ? true : false}
                defaultValue={RegNoSuggestion(latestStudent["regNo"])}
                {...register("regNo", { required: true })}
              ></StyledTextField>
            </Grid>
          </Grid>

          <Grid container sx={{ mb: 1 }} rowGap={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>
                Roll # <Asterisk />
              </StyledFieldHeading>
              <StyledTextField
                error={errors.rollNo ? true : false}
                {...register("rollNo", { required: true })}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>
                Student Name <Asterisk />
              </StyledFieldHeading>
              <StyledTextField
                error={errors.name ? true : false}
                {...register("name", { required: true })}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>
                Father Name <Asterisk />
              </StyledFieldHeading>
              <StyledTextField
                error={errors.fatherName ? true : false}
                {...register("fatherName", { required: true })}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>
                Class <Asterisk />
              </StyledFieldHeading>
              <StyledSelect
                defaultValue={selectOptions.classes[0]}
                error={errors.class ? true : false}
                {...register("class", { required: true })}
              >
                {selectOptions.classes.map((className, index) => (
                  <MenuItem key={index} value={className}>
                    {className}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
          </Grid>

          <Grid container sx={{ mb: 1 }} rowGap={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Mother Name</StyledFieldHeading>
              <StyledTextField {...register("motherName")}></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Date of Birth</StyledFieldHeading>
              <StyledDatePicker {...register("dateOfBirth")}></StyledDatePicker>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Admission Date</StyledFieldHeading>
              <StyledDatePicker
                {...register("admissionDate")}
                value={format(new Date(), "yyyy-MM-dd")}
              ></StyledDatePicker>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Gender</StyledFieldHeading>
              <StyledSelect {...register("gender")}>
                {selectOptions.genders.map((gender, index) => (
                  <MenuItem key={index} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
          </Grid>

          <Grid container sx={{ mb: 1 }} rowGap={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Category </StyledFieldHeading>
              <StyledSelect
                {...register("category")}
                defaultValue={selectOptions.categories[0]}
              >
                {selectOptions.categories.map((category, index) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Religion </StyledFieldHeading>
              <StyledSelect {...register("religion")}>
                {selectOptions.religions.map((religion, index) => (
                  <MenuItem key={index} value={religion}>
                    {religion}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Blood Group </StyledFieldHeading>
              <StyledSelect {...register("bloodGroup")}>
                {selectOptions.bloodGroups.map((gender, index) => (
                  <MenuItem key={index} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Status</StyledFieldHeading>
              <StyledSelect
                {...register("status")}
                defaultValue={selectOptions.studentStatuses[0]}
              >
                {selectOptions.studentStatuses.map((status, index) => (
                  <MenuItem key={index} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
          </Grid>
        </Box>
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
          <Grid container sx={{ mb: 1 }} rowSpacing={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Phone (Office)</StyledFieldHeading>
              <StyledTextField {...register("phoneOffice")}></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Phone (Res) </StyledFieldHeading>
              <StyledTextField
                {...register("phoneResidence")}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Mobile (Office : SMS)</StyledFieldHeading>
              <StyledTextField {...register("mobileOffice")}></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Mobile (Res) </StyledFieldHeading>
              <StyledTextField
                {...register("mobileResidence")}
              ></StyledTextField>
            </Grid>
          </Grid>

          <Grid container sx={{ mb: 1 }} rowSpacing={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Email</StyledFieldHeading>
              <StyledTextField {...register("email")}></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>CNIC # </StyledFieldHeading>
              <StyledTextField {...register("cnicNo")}></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>B Form #</StyledFieldHeading>
              <StyledTextField {...register("bFormNo")}></StyledTextField>
            </Grid>
          </Grid>

          <Grid container sx={{ mb: 1 }} rowSpacing={1}>
            <Grid item xs={12} sm={12} lg={6}>
              <StyledFieldHeading>Address</StyledFieldHeading>
              <StyledTextField {...register("address")}></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>City</StyledFieldHeading>
              <StyledTextField {...register("city")}></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Country</StyledFieldHeading>
              <StyledSelect
                {...register("country")}
                defaultValue={selectOptions.countries[0]}
              >
                {selectOptions.countries.map((country, index) => (
                  <MenuItem key={index} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
          </Grid>

          <Grid container sx={{ mb: 1 }} rowSpacing={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Monthly / Tution Fee</StyledFieldHeading>
              <StyledTextField {...register("monthlyFee")}></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Admission Fee</StyledFieldHeading>
              <StyledTextField {...register("admissionFee")}></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Transport Fee</StyledFieldHeading>
              <StyledTextField {...register("transportFee")}></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Routes / Area</StyledFieldHeading>
              <StyledSelect {...register("routes")}>
                {selectOptions.routes.map((route, index) => (
                  <MenuItem key={index} value={route}>
                    {route}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 1 }} rowSpacing={1}>
            <Grid item xs={12} sm={12} lg={12}>
              <StyledFieldHeading>Comments / Detail</StyledFieldHeading>
              <StyledTextField {...register("comments")}></StyledTextField>
            </Grid>
          </Grid>
        </Box>
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
          <Grid container sx={{ mb: 1 }} rowSpacing={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Login ID</StyledFieldHeading>
              <StyledTextField
                disabled
                value="AUTO"
                {...register("loginId")}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Password</StyledFieldHeading>
              <StyledTextField
                type="password"
                {...register("password")}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Login Status</StyledFieldHeading>
              <StyledSelect {...register("loginStatus")}>
                {selectOptions.loginStatuses.map((status, index) => (
                  <MenuItem key={index} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            {/* <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Student Picture</StyledFieldHeading>
              <StyledFileInput {...register("picture")}></StyledFileInput>
            </Grid> */}
            <Grid item xs={12} sm={6} lg={3}>
              <StyledFieldHeading>Student Picture</StyledFieldHeading>
              <StyledTextField {...register("picture")}></StyledTextField>
            </Grid>
          </Grid>
        </Box>
        <StyledLoadingButton
          loading={isLoading}
          width={{ xs: "100%", md: "25%" }}
          type="submit"
        >
          Add new
        </StyledLoadingButton>
      </form>
    </Box>
  );
}

export default NewStudentEnrollment;
