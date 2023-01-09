import React from "react";
import Appbar from "../components/admin/navigation/Appbar";
import Drawer from "../components/admin/navigation/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import PageHead from "../components/admin/navigation/PageHead";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

function MainLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(window.innerWidth > 900);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Appbar open={open} toggleDrawer={toggleDrawer} />
        <Box sx={{ display: "flex", width: "100%" }}>
          <Drawer
            open={open}
            isMobile={theme.breakpoints.down("sm")}
            toggleDrawer={toggleDrawer}
          />
          {/* <Toolbar /> */}
          <Box
            sx={{
              flexGrow: "1",
              bgcolor: "#ecf0f5",
            }}
          >
            <Main open={open} sx={{ mt: 5,pb:50, width: "100%" }}>
              <PageHead />
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  borderTop: "3px solid #d2d6de",
                  px: 1,
                  pt: 0.5,
                  pb: 2,
                }}
              >
                <Outlet />
              </Box>
            </Main>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default MainLayout;
