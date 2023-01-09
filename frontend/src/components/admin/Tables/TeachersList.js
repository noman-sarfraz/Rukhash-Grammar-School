import { Add, Edit, Clear } from "@mui/icons-material";
import { Button, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import { useDeleteTeacherMutation } from "../../../features/teachers/teachersApiSlice";
import AlertDialog from "../../common/AlertDialogue";
import DeleteButton from "../../common/DeleteButton";
import EditButton from "../../common/EditButton";

function TeachersList({ teachers }) {
  const [openDeleteDialgue, setOpenDeleteDialgue] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [deleteTeacher] = useDeleteTeacherMutation();

  const handleDeleteTeacher = async (id) => {
    setDeleteId(id);
    setOpenDeleteDialgue(true);
  };

    const deleteTheTeacher = async () => {
      const res = await deleteTeacher(deleteId);
      // console.log(res);
      if (res.data?.success) {
        toast.success("Teacher deleted successfully.");
        setDeleteId(null)
        if (window.confirm("Do you want to refresh the page to see changes?")) {
          window.location.reload();
        }
      } else {
        toast.error("Error: Couldn't delete teacher.");
      }
    };

  return (
    <div>
      <AlertDialog
        open={openDeleteDialgue}
        setOpen={setOpenDeleteDialgue}
        title={"Delete"}
        message={"Are you sure you want to delete this teacher?"}
        onSuccess={deleteTheTeacher}
      />
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Phone</th>
            <th>Login ID</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={teacher._id}>
              <td>{index + 1}</td>
              <td>
                <Link
                  href={`/admin/view-teacher/${teacher._id}`}
                  sx={{ textDecoration: "none" }}
                >
                  {`${teacher.firstName} ${teacher.lastName}`}
                </Link>
              </td>
              <td>{teacher.gender}</td>
              <td>{teacher.department}</td>
              <td>{teacher.designation}</td>
              <td>{teacher.phone}</td>
              <td>{teacher.loginId}</td>
              <td>{teacher.role}</td>
              <td>{teacher.salary}</td>
              <td>{teacher.status}</td>
              <td>
                <EditButton href={`/admin/edit-teacher/${teacher._id}`} />
              </td>
              <td>
                <DeleteButton
                  onClick={() => handleDeleteTeacher(teacher._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {teachers.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
            mb: 1,
            fontSize: 12,
          }}
        >
          No records found.
        </Box>
      ) : null}
    </div>
  ); 
}

export default TeachersList;
