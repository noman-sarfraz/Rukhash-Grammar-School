import { Box, Grid } from "@mui/material";
import React from "react";
import PromoteStudentsTable from "../../components/admin/Tables/PromoteStudents";
import StyledButton from "../../components/styled/StyledButton";
import AddIcon from "@mui/icons-material/Add";
import StyledDatePicker from "../../components/styled/StyledDatePicker";
import StyledSelect from "../../components/styled/StyledSelect";

function PromoteStudents() {
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
        <StyledButton mx="1px" href="/admin/student-promote-view">
          Student View
        </StyledButton>
        <StyledButton mx="1px" href="/admin/new-promote">
          <AddIcon sx={{ fontSize: 18 }} />
          Add New
        </StyledButton>
      </Box>
      <Box sx={{ my: 1 }}>
        <Grid container sx={{ mb: 1 }} rowGap={1}>
          <Grid item xs={6} md={2}>
            <StyledDatePicker></StyledDatePicker>
          </Grid>
          <Grid item xs={6} md={2}>
            <StyledDatePicker></StyledDatePicker>
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 1 }} rowGap={1}>
          <Grid item xs={12} md={3}>
            <StyledSelect></StyledSelect>
          </Grid>
          <Grid item xs={6} md={2}>
            <StyledSelect></StyledSelect>
          </Grid>
          <Grid item xs={6} md={2}>
            <StyledSelect></StyledSelect>
          </Grid>
          <Grid item xs={12} md={1}>
            <StyledButton height="25px">Filter</StyledButton>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <PromoteStudentsTable />
      </Box>
    </Box>
  );
}

export default PromoteStudents;
