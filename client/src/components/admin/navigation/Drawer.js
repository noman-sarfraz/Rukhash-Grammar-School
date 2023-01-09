import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AppsIcon from "@mui/icons-material/Apps";
import {
  Avatar,
  Button,
  ClickAwayListener,
  Collapse,
  Grid,
  LinearProgress,
  Link,
  Menu,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SettingsIcon from "@mui/icons-material/Settings";
import dp from "../../../assets/dp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faUserGraduate,
  faNoteSticky,
  faRegistered,
  faChalkboardTeacher,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

// drawer width
const drawerWidth = 250;
var navItems = [
  {
    name: "dashboard",
    text: "Dashboard / Home",
    link: "/admin",
    icon: <FontAwesomeIcon icon={faDashboard} />,
    children: null,
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "students",
    text: "Students",
    icon: <FontAwesomeIcon icon={faUserGraduate} />,
    children: [
      {
        text: "New Student Enrollment",
        link: "/admin/new-student-enrollment",
      },
      {
        text: "Students List",
        link: "/admin/students-list",
      },
      // {
      //   text: "Promote Students",
      //   link: "/admin/promote-students",
      // },
    ],
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "fee",
    text: "Fee",
    disable: true,
    icon: <MonetizationOnIcon sx={{ fontSize: 18 }} />,
    children: [
      {
        text: "New Fee Voucher",
        link: "/admin/new-fee-voucher",
      },
      {
        text: "Fee Vouchers",
        link: "/admin/fee-vouchers",
      },
      {
        text: "Fee Payments",
        link: "/admin/fee-payments",
      },
    ],
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "attendance",
    text: "Attendance",
    disable: true,
    icon: <FormatListNumberedIcon sx={{ fontSize: 18 }} />,
    children: [
      {
        text: "Add New Attendance",
        link: "#",
      },
      {
        text: "Daily Attendance Report",
        link: "#",
      },
      {
        text: "Monthly Attendance Report",
        link: "#",
      },
    ],
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "exams",
    text: "Exam / Result",
    disable: true,
    icon: <ContentPasteIcon sx={{ fontSize: 18 }} />,
    children: [
      {
        text: "Exam Categories",
        link: "#",
      },
      {
        text: "Exam Schedule",
        link: "#",
      },
      {
        text: "Question Sheets",
        link: "#",
      },
      {
        text: "Marks Register",
        link: "#",
      },
    ],
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "settings",
    text: "School Settings",
    disable: true,
    icon: <SettingsIcon sx={{ fontSize: 18 }} />,
    children: [
      {
        text: "Subjects / Courses",
        link: "/admin/subjects",
      },
      {
        text: "Class / Batch",
        link: "/admin/classes",
      },

      {
        text: "Manage Grade",
        link: "/admin/manage-grades",
      },
      {
        text: "Religions",
        link: "/admin/religions",
      },
      {
        text: "Notice Board",
        link: "/admin/notice-board",
      },
    ],
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "teachers",
    text: "Manage Teachers",
    icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
    children: [
      {
        text: "Add New Teacher",
        link: "/admin/add-new-teacher",
      },
      {
        text: "Teachers List",
        link: "/admin/teachers-list",
      },
    ],
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "finance",
    text: "Accounts / Finance",
    disable: true,
    icon: <FontAwesomeIcon icon={faMoneyCheckAlt} />,
    children: [
      {
        text: "Manage Accounts",
        link: "#",
      },
      {
        text: "Expense Vouchers",
        link: "#",
      },
      {
        text: "Income Vouchers",
        link: "#",
      },
      {
        text: "Account Ledger",
        link: "#",
      },
      {
        text: "Trial Balance",
        link: "#",
      },
      {
        text: "Income Statement",
        link: "#",
      },
    ],
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "homework",
    text: "Manage Homework",
    link: "#",
    disable: true,
    children: null,
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "users",
    text: "Users",
    link: "/admin/users",
    children: null,
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "schoolProfile",
    text: "School Profile ",
    link: "/admin/school-profile",
    children: null,
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
  {
    name: "changePassword",
    text: "Change Password",
    link: "/admin/change-password",
    children: null,
    selected: function (location) {
      return this.children
        ? Boolean(
            this.children.find((child) => child.link === location.pathname)
          )
        : this.link === location.pathname;
    },
  },
];
function DrawerComponent({ open, toggleDrawer }) {
  const theme = useTheme();
  const { primary } = theme.pallete;

  const location = useLocation();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900);

  const handleToggleDrawer = () => {
    toggleDrawer();
  };

  React.useEffect(() => {
    if (window.innerWidth > 900 && isMobile) {
      setIsMobile(false);
    } else if (window.innerWidth < 900 && !isMobile) {
      setIsMobile(true);
    }
  }, [open]);

  const subListOpenInitialState = {
    students: navItems
      .find((nav) => nav.name === "students")
      .selected(location),
    fee: navItems.find((nav) => nav.name === "fee").selected(location),
    attendance: navItems
      .find((nav) => nav.name === "attendance")
      .selected(location),
    exams: navItems.find((nav) => nav.name === "exams").selected(location),
    settings: navItems
      .find((nav) => nav.name === "settings")
      .selected(location),
    teachers: navItems
      .find((nav) => nav.name === "teachers")
      .selected(location),
    finance: navItems.find((nav) => nav.name === "finance").selected(location),
  };
  const emptySubListOpen = {
    students: false,
    fee: false,
    attendance: false,
    exams: false,
    settings: false,
    teachers: false,
    finance: false,
  };
  const [subListOpen, setSubListOpen] = React.useState(subListOpenInitialState);

  const changeSubListOpen = (property) => {
    setSubListOpen({
      ...emptySubListOpen,
      [property]: !subListOpen[property],
    });
  };

  // const checkOpenedParent = (item) => {
  //   if (item.selected(location)) {
  //     changeSubListOpen(item.name);
  //   }
  // };

  const drawer = (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 1,
          background: "linear-gradient(to top, rgba(13,154,211,1), #0d47a1)",
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: 600, color: "white" }}
        >
          SCHOOL
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "white" }} />
      <List>
        {navItems.map((item, index) => (
          <div key={item.text}>
            <ListItem
              key={item.text}
              disablePadding
              sx={{ bgcolor: primary, color: "#b8c7ce" }}
            >
              <ListItemButton
                href={item.link}
                disabled={item.disable}
                selected={item.selected ? item.selected(location) : null}
                // onLoad={item.children ? checkOpenedParent(item) : undefined}
                onClick={
                  item.children ? () => changeSubListOpen(item.name) : null
                }
                sx={{
                  [`&:hover`]: {
                    color: "white",
                    background: "linear-gradient(to top, #143b64, #0d47a1)",
                  },
                  [`&.Mui-selected`]: {
                    color: "white",
                    // bgcolor: "#0d78be !important",
                    background: `linear-gradient(to left, rgba(13,154,211,1), #0d47a1)`,
                    //   "linear-gradient(to top, #143b64, #0d47a1)",
                    // color: "white",
                  },
                }}
              >
                {item.icon ? (
                  item.icon
                ) : (
                  <ChevronRightIcon sx={{ fontSize: 18, color: "#ec822a" }} />
                )}
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 500,
                        lineHeight: 1.2,
                        ml: 2,
                      }}
                    >
                      {item.text}
                    </Typography>
                  }
                />
                {item.children &&
                  (subListOpen[item.name] ? (
                    <ExpandLess sx={{ fontSize: 18 }} />
                  ) : (
                    <ExpandMore sx={{ fontSize: 18 }} />
                  ))}
              </ListItemButton>
            </ListItem>
            {item.children && (
              <Collapse
                in={subListOpen[item.name]}
                timeout="auto"
                unmountOnExit
              >
                <List
                  component="div"
                  disablePadding
                  sx={{ bgcolor: "#143b64" }}
                >
                  {item.children.map((subItem, index) => (
                    <ListItemButton
                      key={subItem.text}
                      href={subItem.link}
                      selected={location.pathname === subItem.link}
                      sx={{
                        pl: 2,
                        color: "#8aa4af",
                        [`&:hover`]: {
                          // bgcolor: "red",
                          background:
                            "linear-gradient(to top, #143b64, #0d47a1)",
                          color: "white",
                        },
                        [`&.Mui-selected`]: {
                          color: "white",
                          // bgcolor: "#7dc7e5 !important",
                          background: `linear-gradient(to left, rgba(13,154,211,1), #0d47a1)`,
                          // background:
                          //   "linear-gradient(to top, #143b64, #0d47a1)",
                          // color: "white",
                        },
                      }}
                    >
                      {/* <ListItemIcon sx={{ mr: -3, color: "#8aa4af" }}> */}

                      <ChevronRightIcon sx={{ fontSize: 18 }} />
                      {/* </ListItemIcon> */}
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: 12,
                              fontWeight: 500,
                              lineHeight: 1.2,
                              color: "inherit",
                              ml: 2,
                            }}
                          >
                            {subItem.text}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* {console.log(isMobile ? "true" : window.innerWidth)} */}
      {/* {console.log("open", open, "!isMobile", !isMobile)} */}
      <Drawer
        open={open && !isMobile}
        onClose={handleToggleDrawer}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          "*": {
            scrollbarWidth: "0px",
          },
          "*::-webkit-scrollbar": {
            width: 0,
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: primary,
            color: "#b8c7ce",
          },
        }}
        variant="persistent"
        anchor="left"
      >
        {drawer}
      </Drawer>
      <Drawer
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          "*": {
            scrollbarWidth: "0px",
          },
          "*::-webkit-scrollbar": {
            width: 0,
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: primary,
            color: "#b8c7ce",
          },
        }}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        anchor="left"
        open={open && isMobile}
        onClose={handleToggleDrawer}
      >
        {drawer}
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
