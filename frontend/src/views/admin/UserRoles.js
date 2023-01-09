import { Box } from "@mui/system";
import React from "react";
import UserRolesTable from "../../components/admin/Tables/UserRoles";
import StyledButton from "../../components/styled/StyledButton";
import AddIcon from "@mui/icons-material/Add";

function UserRoles() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          mt: 0.5,
          mb: 2,
          pb: 0.5,
          borderBottom: "1px solid #efefef",
        }}
      >
        <StyledButton href="#" disabled>
          <AddIcon sx={{ fontSize: "20px" }}></AddIcon>
          Add New
        </StyledButton>
      </Box>
      <UserRolesTable />
    </Box>
  );
}

export default UserRoles;
