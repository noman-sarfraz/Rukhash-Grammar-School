import { OutlinedInput, Select, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledSelect = styled(TextField).attrs((props) => ({
  select: true,
  size: "small",
  // variant: "outlined",
  type: props.type ? props.type : "text",
  // displayEmpty: true,
  // value: props.value ? props.value : "",
  input: <OutlinedInput sx={{fontSize: '12px'}} label="Tag" />,
  defaultValue: props.defaultValue ? props.defaultValue : "",
  inputProps: {
    style: {
      fontSize: 12,
      padding: "4px 8px 4px 8px",
    },
  },
  sx: {
    fontSize: 12,
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      "&.Mui-focused fieldset": {
        border: "1px solid",
        borderColor: props.error ? "#D32F2F" : "#1976d2",
      },
    },
    "& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        p: 0,
        px: 1,
        py: '1px',
      },

    // padding: "0px 0px !important",
    // borderRadius: 0,
    width: props.width ? props.width : "98%",
    height: "25px",
    // "& .MuiMenu-list": {
    //   p: 0,
    // },
    // "& .css-6hp17o-MuiList-root-MuiMenu-list": {
    //   p: 0,
    //   // pb: "0px !important",
    // },
    // padding: 0,
    // border: "1px solid red",

    // "&:before": {
    //   // border: "1px solid #1976d2",
    // },
    // "&:after": {
    //   // border: "1px solid red",
    //   // borderRadius: 0,
    // },
    // "& .MuiOutlinedInput-root": {
    // borderRadius: 0,
    // bgcolor: "red",
    //   "&.Mui-focused fieldset": {
    //     // borderColor: "red",
    // border: "1px solid #1976d2",
    //   },
    // },
  },
}))``;

// const StyledSelect = styled(Select).attrs((props) => ({
//   size: "small",
//   displayEmpty: true,
//   value: props.value ? props.value : "",
//   inputProps: { style: { fontSize: 12 } },
//   sx: {
//     // padding: "0px 0px !important",
//     fontSize: 12,
//     borderRadius: 0,
//     width: props.width ? props.width : "98%",
//     height: "25px",
//     // "& .MuiMenu-list": {
//     //   p: 0,
//     // },
//     // "& .css-6hp17o-MuiList-root-MuiMenu-list": {
//     //   p: 0,
//     //   // pb: "0px !important",
//     // },
//     // padding: 0,
//     // border: "1px solid red",

//     // "&:before": {
//     //   // border: "1px solid #1976d2",
//     // },
//     // "&:after": {
//     //   // border: "1px solid red",
//     //   // borderRadius: 0,
//     // },
//     // "& .MuiOutlinedInput-root": {
//     // borderRadius: 0,
//     // bgcolor: "red",
//     //   "&.Mui-focused fieldset": {
//     //     // borderColor: "red",
//     // border: "1px solid #1976d2",
//     //   },
//     // },
//   },
// }))``;

export default StyledSelect;
