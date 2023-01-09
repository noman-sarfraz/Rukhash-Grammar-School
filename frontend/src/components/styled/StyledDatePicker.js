import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledDatePicker = styled(TextField).attrs((props) => ({
  size: "small",
  type: "date",
  inputProps: { style: { fontSize: 12, padding: "4px 8px 4px 8px" } },
  sx: {
    width: "98%",
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      "&.Mui-focused fieldset": {
        // borderColor: "red",
        border: "1px solid #1976d2",
      },
    },
  },
}))``;

export default StyledDatePicker;
