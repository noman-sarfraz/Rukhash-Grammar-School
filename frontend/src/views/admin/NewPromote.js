import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import NewPromoteTable from "../../components/admin/Tables/NewPromote";
import StyledButton from "../../components/styled/StyledButton";
import StyledDatePicker from "../../components/styled/StyledDatePicker";
import StyledSelect from "../../components/styled/StyledSelect";
import StyledTextField from "../../components/styled/StyledTextField";

function NewPromote() {
  return (
    <Box>
      <Box sx={{ my: 1 }}>
        <Grid
          container
          rowGap={1}
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid item xs={12} md={4}>
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
                Promoted From:
              </Typography>
              <Box sx={{ width: "50%" }}>
                <StyledSelect></StyledSelect>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <NewPromoteTable />

        <Grid
          container
          rowGap={1}
          sx={{
            mt: 5,
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid item xs={12} md={4}>
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
                Promoted To:
              </Typography>
              <Box sx={{ width: "50%" }}>
                <StyledSelect></StyledSelect>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
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
                Date:
              </Typography>
              <Box sx={{ width: "50%" }}>
                <StyledDatePicker></StyledDatePicker>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
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
                Fee Increment:
              </Typography>
              <Box sx={{ width: "50%" }}>
                <StyledTextField></StyledTextField>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
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
                Increment Type:
              </Typography>
              <Box sx={{ width: "50%" }}>
                <StyledTextField></StyledTextField>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ width: { xs: "100%", md: "33%" } }}>
          <StyledButton width="100%">PROMOTE NOW</StyledButton>
        </Box>
      </Box>
    </Box>
  );
}

export default NewPromote;
