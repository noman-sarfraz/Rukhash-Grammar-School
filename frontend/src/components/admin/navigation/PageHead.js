import { Box, Breadcrumbs, Link, Typography, useTheme } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const headers = {
  "/admin": {
    title: "Dashboard",
    breadcrumbs: [
      {
        text: "Dashboard",
      },
    ],
  },
  "/admin/new-student-enrollment": {
    title: "New Student Enrollment",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },

      {
        text: "Students",
        link: "/admin/students-list",
      },
      {
        text: "New Student Enrollment",
      },
    ],
  },
  "/admin/enrollment-multiple-students": {
    title: "Enrollment Multiple Students",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },

      {
        text: "Students",
        link: "/admin/students-list",
      },

      {
        text: "Enrollment Multiple Students",
      },
    ],
  },
  "/admin/students-list": {
    title: "Students List",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },

      {
        text: "Students",
        link: "/admin/students-list",
      },
      {
        text: "Students List",
      },
    ],
  },
  "/admin/view-student": {
    title: "Student Profile",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },

      {
        text: "Students",
        link: "/admin/students-list",
      },
      {
        text: "Student Profile",
      },
    ],
  },
  "/admin/update-student": {
    title: "Update Student Details",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },

      {
        text: "Students",
        link: "/admin/students-list",
      },
      {
        text: "Update Student Details",
      },
    ],
  },

  "/admin/promote-students": {
    title: "Promote Students",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },

      {
        text: "Students",
        link: "/admin/students-list",
      },
      {
        text: "Promote Students",
      },
    ],
  },
  "/admin/view-promote": {
    title: "Promote Students",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },

      {
        text: "Students",
        link: "/admin/students-list",
      },
      {
        text: "Promote Students",
      },
    ],
  },
  "/admin/student-promote-view": {
    title: "Promote Students",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },

      {
        text: "Students",
        link: "/admin/students-list",
      },
      {
        text: "Promote Students",
      },
    ],
  },
  "/admin/new-promote": {
    title: "Promote Students",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },

      {
        text: "Students",
        link: "/admin/students-list",
      },
      {
        text: "Promote Students",
      },
    ],
  },

  "/admin/new-fee-voucher": {
    title: "New Fee Voucher",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },

      {
        text: "Fee",
        link: "/admin/fee-vouchers",
      },
      {
        text: "New Fee Voucher",
      },
    ],
  },
  "/admin/fee-vouchers": {
    title: "Fee Vouchers",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "Fee",
        link: "/admin/fee-vouchers",
      },
      {
        text: "Fee Vouchers",
      },
    ],
  },
  "/admin/fee-payments": {
    title: "Fee Payments",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "Fee",
        link: "/admin/fee-vouchers",
      },
      {
        text: "Fee Payments",
      },
    ],
  },
  "/admin/subjects": {
    title: "Subjects / Courses",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "School Settings",
        link: "/admin/subjects",
      },
      {
        text: "Subjects / Courses",
      },
    ],
  },
  "/admin/classes": {
    title: "Class / Batch",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "School Settings",
        link: "/admin/subjects",
      },
      {
        text: "Class / Batch",
      },
    ],
  },
  "/admin/manage-grades": {
    title: "Manage Grades",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "School Settings",
        link: "/admin/subjects",
      },
      {
        text: "Manage Grades",
      },
    ],
  },
  "/admin/religions": {
    title: "Religions",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "School Settings",
        link: "/admin/subjects",
      },
      {
        text: "Religions",
      },
    ],
  },
  "/admin/notice-board": {
    title: "Notice Board",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "School Settings",
        link: "/admin/subjects",
      },
      {
        text: "Notice Board",
      },
    ],
  },
  "/admin/add-new-teacher": {
    title: "Add New Teacher",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "Teachers List",
        link: "/admin/teachers-list",
      },
      {
        text: "Add New Teacher",
      },
    ],
  },
  "/admin/teachers-list": {
    title: "Teachers List",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "Teachers",
        link: "/admin/teachers-list",
      },
      {
        text: "Teachers List",
      },
    ],
  },
  "/admin/view-teacher/:id": {
    title: "Teacher Details",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "Teachers",
        link: "/admin/teachers-list",
      },
      {
        text: "Teacher Details",
      },
    ],
  },

  "/admin/edit-teacher/:id": {
    title: "Update Teacher Details",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "Teachers",
        link: "/admin/teachers-list",
      },
      {
        text: "Update Teacher Details",
      },
    ],
  },

  "/admin/users": {
    title: "Users",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "Users",
      },
    ],
  },
  "/admin/user-roles": {
    title: "Users Roles",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "Users",
      },
    ],
  },
  "/admin/school-profile": {
    title: "School Profile",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "School Profile",
      },
    ],
  },
  "/admin/change-password": {
    title: "Change Password",
    breadcrumbs: [
      {
        text: "Dashboard",
        link: "/admin",
      },
      {
        text: "Change Password",
      },
    ],
  },
};

function PageHead({ pageTitle, breadcrumbs }) {
  const theme = useTheme();
  const location = useLocation();
  return (
    <div>
      <Box
        sx={{
          // border: "1px solid",
          [theme.breakpoints.up("md")]: {
            display: "flex",
            justifyContent: "space-between",
          },
          pr: 2,
          mb: 1.5,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: theme.pallete.primary, fontWeight: 500 }}
        >
          {headers[location.pathname]?.title ? headers[location.pathname].title : null}
        </Typography>
        <Box sx={{ py: { xs: 1, md: 0 }, pt: { md: 0.5 } }}>
          <Breadcrumbs aria-label="breadcrumb" separator=">">
            {headers[location.pathname]?.breadcrumbs ? headers[location.pathname].breadcrumbs.map((breadcrumb, index) => (
              <Box key={index}>
                {breadcrumb.link ? (
                  <Link
                    underline="hover"
                    color="text.primary"
                    href={breadcrumb.link}
                  >
                    <Typography sx={{ fontSize: 12 }}>
                      {breadcrumb.text}
                    </Typography>
                  </Link>
                ) : (
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {breadcrumb.text}
                  </Typography>
                )}
              </Box>
            )) : null}
          </Breadcrumbs>
        </Box>
      </Box>
    </div>
  );
}

export default PageHead;
