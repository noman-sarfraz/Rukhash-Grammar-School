import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledFieldHeading = styled(Typography).attrs((props) => ({
  sx: {
    fontSize: 12,
    fontWeight: 600,
    mb: 0.2,
  },
}))`
  /* text-transform: none !important;
  border-radius: 0 !important;
  font-size: 12px !important;
  padding: 4px 12px 4px 12px !important;
  background-color: #1d548f !important; */

  /* &:hover: {
    background-color: #143559 !important;
  } */
`;

export default StyledFieldHeading;
