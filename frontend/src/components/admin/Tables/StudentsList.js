import { Box, Link } from "@mui/material";
import React, { useState } from "react";
import { format } from "date-fns";
import { toNormalDate } from "../../../utils/date";
import EditButton from "../../common/EditButton";
import DeleteButton from "../../common/DeleteButton";
import { useDeleteStudentMutation } from "../../../features/students/studentsApiSlice";
import { toast } from "react-toastify";
import AlertDialog from "../../common/AlertDialogue";

function StudentsList({ students }) {
  const [openDeleteDialgue, setOpenDeleteDialgue] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [deleteStudent] = useDeleteStudentMutation();


  const handleDeleteStudent = async (id) => {
    setDeleteId(id);
    setOpenDeleteDialgue(true);
  }

  const deleteTheStudent = async () => {
    const res = await deleteStudent(deleteId);
    // console.log(res);
    if (res.data?.success) {
      toast.success("Student deleted successfully.");
      setDeleteId(null);
      if(window.confirm("Do you want to refresh the page to see changes?")) {
        window.location.reload()
      }
    } else {
      toast.error("Error: Couldn't delete student.");
    }
  };

  return (
    <div>
      <AlertDialog
        open={openDeleteDialgue}
        setOpen={setOpenDeleteDialgue}
        title={"Delete"}
        message={"Are you sure you want to delete this student?"}
        onSuccess={deleteTheStudent}
      />
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Reg #</th>
            <th>Roll #</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Gender</th>
            <th>Birthdate</th>
            <th>Adm Date</th>
            <th>Class</th>
            <th>Mobile #</th>
            <th>Monthly Fee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={`${index}${student._id}`}>
              <td>{index + 1}</td>
              <td>{student.regNo}</td>
              <td>{student.rollNo}</td>
              <td>
                <Link
                  href={`/admin/view-student/${student._id}`}
                  sx={{ textDecoration: "none" }}
                >
                  {student.name}
                </Link>
              </td>
              <td>{student.fatherName}</td>
              <td>{student.gender}</td>
              <td>{toNormalDate(student.dateOfBirth)}</td>
              <td>{toNormalDate(student.admissionDate)}</td>
              <td>{student.class}</td>
              <td>{student.mobileResidence}</td>
              <td>{student.monthlyFee}</td>
              <td>{student.status}</td>
              <td>
                <EditButton href={`/admin/update-student/${student._id}`} />
              </td>
              <td>
                <DeleteButton
                  onClick={() => handleDeleteStudent(student._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {students.length === 0 ? (
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

export default StudentsList;
