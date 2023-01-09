// import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import styled from "styled-components";

const StyledLoadingButton = styled(LoadingButton).attrs((props) => ({
  variant: "contained",
  disableElevation: true,
  sx: {
    mx: props.mx ? props.mx : undefined,
    textTransform: "none",
    borderRadius: 0,
    fontSize: 12,
    px: 1.5,
    py: 0.5,
    bgcolor: "#1d548f",
    "&:hover": {
      bgcolor: "#143559",
    },
    width: props.responsiveWidth
      ? props.responsiveWidth
      : props.width
      ? props.width
      : undefined,
    // width:  props.responsiveWidth : undefined,
    height: props.height ? props.height : undefined,
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

export default StyledLoadingButton;
