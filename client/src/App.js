import "./App.css";
// import Navbar from "./components/Navbar";
// import Practice from "./components/Practice";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Routes from "./routes";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Practice from "./PRACTICE";

function App() {
  // React.useEffect(() => console.log("App rendered"));
  return (
    <ThemeProvider theme={theme}>
      {/* <Practice /> */}

      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <div> */}
      {/* <Navbar /> */}
      {/* <GlobalStyles
          styles={{
            h1: { color: "red" },
            h2: { color: "green" },
            h5: { color: "green" },
            body: { backgroundColor: "lightpink" },
            ".Mui-selected": {
              backgroundColor: "red !important",
            },
          }}
        /> */}
      {/* <Practice /> */}
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
