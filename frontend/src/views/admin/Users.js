import { Box, Grid, MenuItem } from "@mui/material";
import React from "react";
import StyledButton from "../../components/styled/StyledButton";
import StyledSelect from "../../components/styled/StyledSelect";
import UsersTable from "../../components/admin/Tables/Users";

const selectOptions = {
  branches: ['Rukhash Grammar School']
}

function Users() {
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
        <StyledButton href="/admin/user-roles">User Roles</StyledButton>
      </Box>
      <Box sx={{ my: 1 }}>
        <Grid container sx={{ mb: 1 }} rowGap={1}>
          <Grid item xs={6} md={3}>
            <StyledSelect defaultValue={selectOptions.branches[0]}>
              {selectOptions.branches.map((branch, index) => (
                <MenuItem key={index} value={branch}>
                  {branch}
                </MenuItem>
              ))}
            </StyledSelect>
          </Grid>
          <Grid item xs={6} md={2}>
            <StyledButton height="25px">Filter</StyledButton>
          </Grid>
        </Grid>
      </Box>
      <UsersTable />
    </Box>
  );
}

export default Users;
