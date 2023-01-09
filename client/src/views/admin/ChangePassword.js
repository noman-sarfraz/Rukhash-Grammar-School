import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import StyledButton from "../../components/styled/StyledButton";
import StyledLoadingButton from "../../components/styled/StyledLoadingButton";
import StyledTextField from "../../components/styled/StyledTextField";
import { useChangePasswordMutation } from "../../features/admin/adminApiSlice";

function ChangePassword() {
  const { register, handleSubmit } = useForm();
  const [changePassword, isSuccess, isLoading, isError, error] =
    useChangePasswordMutation();

  const onSubmit = async (data) => {
    if (data.newPassword !== data.confirmNewPassword) {
      toast.error("Your passwords don't match!");
      return;
    }
    const res = await changePassword({
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    });
    if (isError || !isSuccess || !res.data?.newPassword) {
      if (res.error?.data) {
        toast.error(`Error: ${res.error.data.msg}`);
      } else {
        toast.error(`Error: Couldn't change password.`);
      }
    } else {
      toast.success("Password updated successfully.");
    }
  };

  return (
    <Box>
      <Grid
        container
        rowGap={1}
        sx={{
          mt: 2,
          mb: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <Grid item xs={12} md={5} sx={{ mb: "2px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { sx: "left", md: "right" },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Typography
                variant="body2"
                sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
              >
                Old Password:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <StyledTextField
                  {...register("oldPassword", { required: true })}
                  type="password"
                ></StyledTextField>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ mb: "2px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { sx: "left", md: "right" },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Typography
                variant="body2"
                sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
              >
                New Password:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <StyledTextField
                  {...register("newPassword", { required: true })}
                  type="password"
                ></StyledTextField>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ mb: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { sx: "left", md: "right" },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Typography
                variant="body2"
                sx={{ mr: 1, pt: "3px", fontSize: 12, fontWeight: 600 }}
              >
                Confirm Password:
              </Typography>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <StyledTextField
                  {...register("confirmNewPassword", { required: true })}
                  type="password"
                ></StyledTextField>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { sx: "left", md: "right" },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <StyledLoadingButton type="submit" width="98%" height="25px">
                  UPDATE
                </StyledLoadingButton>
              </Box>
            </Box>
          </Grid>
        </form>
      </Grid>
    </Box>
  );
}

export default ChangePassword;
