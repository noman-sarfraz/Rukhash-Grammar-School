import React from "react";
import {
  Box,
  Typography,
  Link,
  Divider,
  Grid,
  LinearProgress,
  Breadcrumbs,
} from "@mui/material";
import { useTheme } from "@mui/material";
import PieChart from "../../components/admin/dashboard/PieChart";
import LineChart from "../../components/admin/dashboard/LineChart";
import BasicTable from "../../components/admin/dashboard/Table";
import CssTable from "../../components/admin/dashboard/CssTable.js";
import RecentFeeCollection from "../../components/admin/Tables/RecentFeeCollection";
import RecentExpense from "../../components/admin/Tables/RecentExpense";
import { useGetAllTeachersQuery } from "../../features/teachers/teachersApiSlice";
import { useGetAllStudentsQuery } from "../../features/students/studentsApiSlice";
import CircularLoader from "../../components/Loaders/CircularLoader";

function Dashboard() {
  const theme = useTheme();
  const {
    data: studentsData,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllStudentsQuery();
  const {
    data: teachersData,
    isLoading: isLoading2,
    isError: isError2,
    isSuccess: isSuccess2,
  } = useGetAllTeachersQuery();

  if (isLoading || isLoading2) {
    return <CircularLoader />
  }
  if (isError || isError2 || !isSuccess2 || !isSuccess) {
    return <h1>Error: Couldn't Fetch Data.</h1>;
  }
  return (
    <Box>
      <Box sx={{}}>
        <Box sx={{ mt: 1, px: 0 }}>
          <Grid
            container
            rowGap={1}
            // columnGap={1}
            sx={{}}
            justifyContent="center"
          >
            {/* <Box> */}
            {[
              {
                text: "Total Students",
                value: studentsData?.count ? studentsData.count : "",
                progress: 60,
                message: "20% increase this year",
                link: "/admin/students-list",
                // bgcolor: "#d14343",
                background:
                  "linear-gradient(to bottom, rgba(13,154,211,1), rgba(13,154,211,0.5))",
                background_reverse: `linear-gradient(to top, rgba(13,154,211,1), #0d47a1)`,
              },
              {
                text: "Total Teachers",
                value: teachersData?.count ? teachersData.count : "",
                progress: 60,
                message: "20% increase in 30 days",
                link: "/admin/teachers-list",
                // bgcolor: "#5048e5",
                background:
                  "linear-gradient(to bottom, rgba(0,150,136,1), rgba(0,150,136,0.5))",
                background_reverse: `linear-gradient(to top, rgba(0,150,136,1), #004d40)`,
              },
              {
                text: "Fee Received (Jan 2023)",
                value: "0.00",
                progress: 60,
                message: "20% increase in 30 days",
                link: "#",
                // bgcolor: "#14b8a6",
                // bgcolor: "#143b64",
                background:
                  "linear-gradient(to bottom, rgba(63,169,86,1), rgba(63,169,86,0.5))",
                background_reverse: `linear-gradient(to top, rgba(63,169,86,1), #1b5e20)`,
              },
              {
                text: "Total Expense (Jan 2023)",
                value: "0.00",
                progress: 60,
                message: "20% increase in 30 days",
                link: "#",
                // bgcolor: "#ffb020",
                background:
                  "linear-gradient(to bottom, rgba(252,100,110,1), rgba(252,100,110,0.5))",
                background_reverse: `linear-gradient(to top, rgba(252,100,110,1), #b71c1c)`,
              },
            ].map((item, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sm={6}
                md={6}
                lg={3}
                sx={
                  {
                    // p: 2,
                    // // border: "1px solid #ccc",
                    // borderRadius: 2,
                    // bgcolor: item.bgcolor,
                    // color: "white",
                  }
                }
              >
                {/* <Button href="/"> */}
                <Box sx={{ width: "95%" }}>
                  <Link href={item.link} sx={{ textDecoration: "none" }}>
                    <Box
                      // component="a"
                      // href="/"
                      sx={{
                        minHeight: { xs: 170, md: 120 },
                        p: 2,
                        // border: "1px solid #ccc",
                        borderRadius: 1,
                        // bgcolor: item.bgcolor,
                        background: item.background,
                        [`&:hover`]: {
                          background: item.background_reverse,
                          boxShadow: 5,
                        },

                        color: "white",
                      }}
                    >
                      <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 0 }}>
                        {item.value}
                      </Typography>
                      {/* color: "#65748b" */}
                      <Typography sx={{ fontSize: 14 }}>{item.text}</Typography>
                      <LinearProgress
                        variant="determinate"
                        value={item.progress}
                        // color="secondary"
                        sx={{
                          // bgcolor: "rgba(255, 255, 255, 0.3)",
                          mt: 4,
                          mb: 0,
                          height: 7,
                          borderRadius: 1,
                          "&.MuiLinearProgress-root": {
                            bgcolor: "rgba(255, 255, 255, 0.3)",
                          },
                          "& .MuiLinearProgress-bar1Determinate": {
                            // bgcolor: "red",
                            background:
                              "linear-gradient(to right, #198754, #00c853)",
                          },
                          // "& .MuiLinearProgress-bar1Determinate": {},
                        }}
                        // color="#121314"
                      />
                      <Typography variant="caption" sx={{ mb: 1 }}>
                        {item.message}
                      </Typography>
                    </Box>
                  </Link>
                </Box>
                {/* </Button> */}
              </Grid>
            ))}
            {/* </Box> */}
          </Grid>
        </Box>

        {/* ******************* */}
        {/* ******************* */}
        {/* ***** Charts ****** */}
        {/* ******************* */}
        {/* ******************* */}
        <Box sx={{ mt: 2 }}>
          <Grid container>
            <Grid item xs={12} lg={8} sx={{}}>
              <Box sx={{ width: "98%", borderTop: `5px solid #0d9ad3`, pt: 2 }}>
                <Typography sx={{ textAlign: "center" }}>
                  Fee collection last 12 months
                </Typography>
                <Box sx={{}}>
                  <LineChart />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4} sx={{}}>
              <Box
                sx={{
                  borderTop: `5px solid #0d9ad3`,
                  pt: 2,
                  width: "98%",
                  height: "100%",
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  Income vs Expenses
                </Typography>
                <Box
                  sx={{
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    width: "90%",
                    // border: "1px solid",
                    // width: "100%",
                  }}
                >
                  <Box>
                    <PieChart />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderBottomWidth: 4, my: 1 }} />

        {/* <BasicTable /> */}
        {/* <CssTable /> */}
        <Typography sx={{ mt: 2, mb: 1, ml: 1 }}>
          Recent Fee Collection{" "}
          <Link href="#" sx={{ fontSize: 12, textDecoration: "none" }}>
            (View All)
          </Link>
        </Typography>
        <div style={{ overflowX: "auto" }}>{/* <RecentFeeCollection /> */}</div>
        <Divider sx={{ borderBottomWidth: 4, my: 1 }} />

        {/* <Typography sx={{ mt: 2, mb: 1, ml: 1 }}>
          Recent Expense{" "}
          <Link href="#" sx={{ fontSize: 12, textDecoration: "none" }}>
            (View All)
          </Link>
        </Typography>
        <RecentExpense /> */}
        {/* <Divider sx={{ borderBottomWidth: 4, my: 1 }} /> */}
      </Box>
    </Box>
  );
}

export default Dashboard;
