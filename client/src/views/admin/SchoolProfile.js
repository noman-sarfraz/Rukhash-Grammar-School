import { Box, Grid, MenuItem, Typography } from "@mui/material";
import React from "react";
import StyledTextField from "../../components/styled/StyledTextField";
import StyledSelect from "../../components/styled/StyledSelect";
import StyledFileInput from "../../components/styled/StyledFileInput";
import StyledButton from "../../components/styled/StyledButton";
import logo from "../../assets/logo.jpg";
import {
  useGetSchoolQuery,
  useUpdateSchoolMutation,
} from "../../features/admin/adminApiSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import StyledLoadingButton from "../../components/styled/StyledLoadingButton";

const selectOptions = {
  booleans: ["No", "Yes"],
  countries: ['Pakistan']
};

function SchoolProfile() {
  const {
    data: GSdata,
    isLoading: isGSLoading,
    isSuccess: isGSSuccess,
    isError: isGSError,
    error: GSError,
  } = useGetSchoolQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [updateSchool, { isLoading, error }] = useUpdateSchoolMutation();

  const onSubmit = async (data) => {
    const res = await updateSchool(data);
    if (res.data?.school) {
      toast.success("Profile updated successfully!");
    } else {
      toast.error("Error: Couldn't update profile!");
    }
  };

  if (isGSLoading) return <h1>Loading...</h1>;
  if (isGSError || !isGSSuccess || !GSdata.school)
    return <h1>Error: Couldn't fetch school data!</h1>;
  let school = GSdata.school;

  return (
    <Box>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Grid
          container
          rowGap={1}
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
                School Name:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={school.name}
                  {...register("name")}
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
                Owner Name:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={school.ownerName}
                  {...register("ownerName")}
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
                Address:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={school.address}
                  {...register("address")}
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
                City:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={school.city}
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
                State:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={school.state}
                  {...register("state")}
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
                  defaultValue={school.country}
                  {...register("country")}
                >
                  {selectOptions.countries.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
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
                  defaultValue={school.phone}
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
                  defaultValue={school.mobile}
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
                National Tax No:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={school.nationalTaxNo}
                  {...register("nationalTaxNo")}
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
                School URL:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  defaultValue={school.schoolUrl}
                  {...register("schoolUrl")}
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
                Address on Print:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledTextField
                  multiline
                  rows="2"
                  defaultValue={school.addressOnPrint}
                  {...register("addressOnPrint")}
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
                Show Address on Print:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledSelect
                  defaultValue={school.showAddressOnPrint}
                  {...register("showAddressOnPrint")}
                >
                  {selectOptions.booleans.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
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
                Show Logo on Print:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledSelect
                  defaultValue={school.showLogoOnPrint}
                  {...register("showLogoOnPrint")}
                >
                  {selectOptions.booleans.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
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
                School Logo:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                {/* <StyledFileInput></StyledFileInput> */}
                <StyledTextField
                  defaultValue={school.logo}
                  {...register("logo")}
                ></StyledTextField>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ xs: "none", md: "block" }}></Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { sx: "left", md: "right" },
                flexDirection: { xs: "column", md: "row" },
                width: "95%",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <StyledLoadingButton
                  type="submit"
                  loading={isLoading}
                  width="100%"
                >
                  UPDATE
                </StyledLoadingButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ xs: "none", md: "block" }}></Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { sx: "left", md: "right" },
                flexDirection: { xs: "column", md: "row" },
                width: "95%",
              }}
            >
              <img src={logo} alt="logo" />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default SchoolProfile;
