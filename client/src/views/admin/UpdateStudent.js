import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import StyledButton from "../../components/styled/StyledButton";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import StyledFieldHeading from "../../components/styled/FieldHeading";
import StyledSelect from "../../components/styled/StyledSelect";
import StyledTextField from "../../components/styled/StyledTextField";
import studentProfilePic from "./../../assets/studentProfilePic.gif";
import FeePendingVouchers from "../../components/admin/Tables/FeePendingVouchers";
import StyledFileInput from "../../components/styled/StyledFileInput";
import StyledDatePicker from "../../components/styled/StyledDatePicker";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";
import {
  useGetStudentQuery,
  useUpdateStudentMutation,
} from "../../features/students/studentsApiSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import StyledLoadingButton from "../../components/styled/StyledLoadingButton";

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


function UpdateStudent() {
  const { id } = useParams();
  const {
    data: GSdata,
    isLoading: isGSLoading,
    isSuccess: isGSSuccess,
    isError: isGSError,
    error: GSError,
  } = useGetStudentQuery(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [updateStudent, { isLoading, error }] = useUpdateStudentMutation();

  const onSubmit = async (data) => {
    // console.log(data);
    // console.log("id :", id);
    const res = await updateStudent({ id, student: data });
    if (res.data?.student) {
      toast.success("Student updated successfully!");
      console.log(res.data.student);
    } else {
      console.log(error);
      toast.error("Error: Couldn't update student!");
    }
  };

  if (isGSLoading) return <h1>Loading...</h1>;
  if (isGSError || !isGSSuccess || !GSdata.student)
    return <h1>Error: Couldn't fetch student data!</h1>;
  let student = GSdata.student;

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
        <StyledButton href={`/admin/students-list/`}>
          <VisibilityIcon sx={{ fontSize: 16, mr: 1 }} />
          View Students List
        </StyledButton>
      </Box>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
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
                    <StyledTextField
                      defaultValue={student.regNo}
                      {...register("regNo")}
                    ></StyledTextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Roll #</StyledFieldHeading>
                    <StyledTextField
                      defaultValue={student.rollNo}
                      {...register("rollNo")}
                    ></StyledTextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Family #</StyledFieldHeading>
                    <StyledTextField value=""></StyledTextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Student Name</StyledFieldHeading>
                    <StyledTextField
                      defaultValue={student.name}
                      {...register("name")}
                    ></StyledTextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Father Name</StyledFieldHeading>
                    <StyledTextField
                      defaultValue={student.fatherName}
                      {...register("fatherName")}
                    ></StyledTextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Mother Name</StyledFieldHeading>
                    <StyledTextField
                      defaultValue={student.motherName}
                      {...register("motherName")}
                    ></StyledTextField>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Gender</StyledFieldHeading>
                    <StyledSelect
                      defaultValue={student.gender}
                      {...register("gender")}
                    >
                      {selectOptions.genders.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Date of birth</StyledFieldHeading>
                    <StyledDatePicker
                      defaultValue={student.dateOfBirth}
                      {...register("dateOfBirth")}
                    ></StyledDatePicker>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Admission Date</StyledFieldHeading>
                    <StyledDatePicker
                      defaultValue={student.admissionDate}
                      {...register("admissionDate")}
                    ></StyledDatePicker>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Class</StyledFieldHeading>
                    <StyledSelect
                      defaultValue={student.class}
                      {...register("class")}
                    >
                      {selectOptions.classes.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Category</StyledFieldHeading>
                    <StyledSelect
                      defaultValue={student.category}
                      {...register("category")}
                    >
                      {selectOptions.categories.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Religion</StyledFieldHeading>
                    <StyledSelect
                      defaultValue={student.religion}
                      {...register("religion")}
                    >
                      {selectOptions.religions.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Blood Group</StyledFieldHeading>
                    <StyledSelect
                      defaultValue={student.bloodGroup}
                      {...register("bloodGroup")}
                    >
                      {selectOptions.bloodGroups.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Status</StyledFieldHeading>
                    <StyledSelect
                      defaultValue={student.status}
                      {...register("status")}
                    >
                      {selectOptions.studentStatuses.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledFieldHeading>Discharge Date</StyledFieldHeading>
                    <StyledDatePicker value=""></StyledDatePicker>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <StyledFieldHeading>Discharge Comments</StyledFieldHeading>
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
                  alt="studentProfilePicture"
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
                <StyledTextField
                  defaultValue={student.phoneOffice}
                  {...register("phoneOffice")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Phone (Res)</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.phoneResidence}
                  {...register("phoneResidence")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Mobile (Office : SMS)</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.mobileOffice}
                  {...register("mobileOffice")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Mobile (Res)</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.mobileResidence}
                  {...register("mobileResidence")}
                ></StyledTextField>
              </Grid>

              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Email</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.email}
                  {...register("email")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>CNIC</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.cnicNo}
                  {...register("cnicNo")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>B Form #</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.bFormNo}
                  {...register("bFormNo")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Identity</StyledFieldHeading>
                <StyledTextField value=""></StyledTextField>
              </Grid>

              <Grid item xs={12} md={6}>
                <StyledFieldHeading>Address</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.address}
                  {...register("address")}
                  // value="Mohallah NIzamabad ,Zafarwal Road ,Shafi ka Bhatta,Sialkot"
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>City</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.city}
                  {...register("city")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Country</StyledFieldHeading>
                <StyledSelect
                  defaultValue={student.country}
                  {...register("country")}
                >
                  {selectOptions.countries.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </Grid>

              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Monthly / Tution Fee</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.monthlyFee}
                  {...register("monthlyFee")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Admission Fee</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.admissionFee}
                  {...register("admissionFee")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Transport Fee</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.transportFee}
                  {...register("transportFee")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Routes / Area</StyledFieldHeading>
                <StyledSelect
                  defaultValue={student.routes}
                  {...register("routes")}
                >
                  {selectOptions.routes.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </Grid>

              <Grid item xs={12} md={12}>
                <StyledFieldHeading>Comments / Detail</StyledFieldHeading>
                <StyledTextField
                  defaultValue={student.comments}
                  {...register("comments")}
                ></StyledTextField>
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
                  defaultValue={student.loginId}
                  {...register("loginId")}
                ></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Password</StyledFieldHeading>
                <StyledTextField value=""></StyledTextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Login Status</StyledFieldHeading>
                <StyledSelect
                  defaultValue={student.loginStatus}
                  {...register("loginStatus")}
                >
                  {selectOptions.loginStatuses.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledFieldHeading>Student Picture</StyledFieldHeading>
                {/* <StyledFileInput></StyledFileInput> */}
                <StyledTextField
                  defaultValue={student.picture}
                  {...register("picture")}
                ></StyledTextField>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <StyledLoadingButton
          type="submit"
          loading={isLoading}
          responsiveWidth={{ xs: "100%", md: "25%" }}
        >
          UPDATE
        </StyledLoadingButton>
      </form>
    </Box>
  );
}

export default UpdateStudent;
