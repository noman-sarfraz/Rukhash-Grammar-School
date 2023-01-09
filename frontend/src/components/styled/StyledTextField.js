import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledTextField = styled(TextField).attrs((props) => ({
  size: "small",
  variant: "outlined",
  type: props.type ? props.type : "text",
  required: props.required ? props.required : false,
  inputProps: {
    style: {
      fontSize: 12,
      padding: "4px 8px 4px 8px",
    },
  },
  sx: {
    width: props.width ? props.width : "98%",
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      "&.Mui-focused fieldset": {
        border: "1px solid",
        borderColor: props.error ? "#D32F2F" : "#1976d2",
      },
    },
    // ...(props.disabled && { bgcolor: "#efefef" }),
  },
}))``;


export default StyledTextField;
