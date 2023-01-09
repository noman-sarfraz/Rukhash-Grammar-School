import React, { useEffect } from "react";
import MuiGlobalStyles from "@mui/material/GlobalStyles";

function GlobalStyles() {
  // useEffect(() => {
  //    console.log("global styles called");
  // });
  return (
    <MuiGlobalStyles
      styles={{
        // h1: { color: "red" },
        // h2: { color: "green" },
        // h5: { color: "green" },
        // body: { backgroundColor: "lightpink" },
        // // ".Mui-selected": {
        //   // color: "white",
        //   backgroundColor: "skyblue !important",
        // },
        // "*": {
        //   scrollbarWidth: "0px",
        // },
        // "*::-webkit-scrollbar": {
        //   width: 0,
        // },
        ".MuiGrid-item": {
          pl: 0,
        },
      }}
    />
  );
}

export default GlobalStyles;
