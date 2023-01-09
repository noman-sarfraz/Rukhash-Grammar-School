import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StyledTextField from "../../components/styled/StyledTextField";
import ViewPromoteTable from "../../components/admin/Tables/ViewPromote";

function ViewPromote() {
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
                <StyledTextField value="Play Group"></StyledTextField>
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
                Promoted To:
              </Typography>
              <Box sx={{ width: "50%" }}>
                <StyledTextField value="KG (JUNIORS)"></StyledTextField>
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
                Increment:
              </Typography>
              <Box sx={{ width: "50%" }}>
                <StyledTextField value="10"></StyledTextField>
              </Box>
            </Box>
          </Grid>

          {/* <Grid container sx={{ mb: 1 }} rowGap={1}>
            <Grid item xs={12} md={4}>
              <StyledTextField></StyledTextField>
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 1 }} rowGap={1}>
            <Grid item xs={12} md={4}>
              <StyledTextField></StyledTextField>
            </Grid>
          </Grid> */}
        </Grid>
        <ViewPromoteTable />
      </Box>
    </Box>
  );
}

export default ViewPromote;
