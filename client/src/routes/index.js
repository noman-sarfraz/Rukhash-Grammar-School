import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../views/admin/Login";
import Dashboard from "../views/admin/Dashboard";
import NewStudentEnrollment from "../views/admin/NewStudentEnrollment";
import { Box } from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import Appbar from "../components/admin/navigation/Appbar";
import Drawer from "../components/admin/navigation/Drawer";
import StudentsList from "../views/admin/StudentsList";
import PromoteStudents from "../views/admin/PromoteStudents";
import NewFeeVoucher from "../views/admin/NewFeeVoucher";
import FeeVouchers from "../views/admin/FeeVouchers";
import FeePayments from "../views/admin/FeePayments";
import Subjects from "../views/admin/Subjects";
import Classes from "../views/admin/Classes";
import ManageGrades from "../views/admin/ManageGrades";
import Religions from "../views/admin/Religions";
import NoticeBoard from "../views/admin/NoticeBoard";
import AddNewTeacher from "../views/admin/AddNewTeacher";
import TeachersList from "../views/admin/TeachersList";
import Users from "../views/admin/Users";
import SchoolProfile from "../views/admin/SchoolProfile";
import ChangePassword from "../views/admin/ChangePassword";
import EnrollmentMultipleStudents from "../views/admin/EnrollmentMultipleStudents";
import ViewStudent from "../views/admin/ViewStudent";
import UpdateStudent from "../views/admin/UpdateStudent";
import StudentPromoteView from "../views/admin/StudentPromoteView";
import ViewPromote from "../views/admin/ViewPromote";
import NewPromote from "../views/admin/NewPromote";
import UserRoles from "../views/admin/UserRoles";
import ViewTeacher from "../views/admin/ViewTeacher";
import EditTeacher from "../views/admin/EditTeacher";
import DefaultLayout from "../layouts/DefaultsLayout";
import AdminAuth from "../layouts/auths/AdminAuth";
import NotFound from "../views/admin/NotFound";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<AdminAuth />}>
          <Route path="admin/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route
              path="new-student-enrollment"
              element={<NewStudentEnrollment />}
            />
            <Route
              path="enrollment-multiple-students"
              element={<EnrollmentMultipleStudents />}
            />
            <Route path="students-list" element={<StudentsList />} />
            <Route path="view-student/:id" element={<ViewStudent />} />
            <Route path="update-student/:id" element={<UpdateStudent />} />
            <Route path="promote-students" element={<PromoteStudents />} />
            <Route
              path="student-promote-view"
              element={<StudentPromoteView />}
            />
            <Route path="view-promote" element={<ViewPromote />} />
            <Route path="new-promote" element={<NewPromote />} />
            <Route path="new-fee-voucher" element={<NewFeeVoucher />} />
            <Route path="fee-vouchers" element={<FeeVouchers />} />
            <Route path="fee-payments" element={<FeePayments />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="classes" element={<Classes />} />
            <Route path="manage-grades" element={<ManageGrades />} />
            <Route path="religions" element={<Religions />} />
            <Route path="notice-board" element={<NoticeBoard />} />
            <Route path="add-new-teacher" element={<AddNewTeacher />} />
            <Route path="teachers-list" element={<TeachersList />} />
            <Route path="view-teacher/:id" element={<ViewTeacher />} />
            <Route path="edit-teacher/:id" element={<EditTeacher />} />
            <Route path="users" element={<Users />} />
            <Route path="user-roles" element={<UserRoles />} />
            <Route path="school-profile" element={<SchoolProfile />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Route>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default MainRoutes;
