const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getStudent,
  createStudent,
  createManyStudents,
  lastAddedStudents,
  updateStudent,
  deleteStudent,
} = require("./../controllers/students");

router.route("/").post(createStudent).get(getAllStudents);
router.route("/create-many").post(createManyStudents);
router.route("/last-added-students").get(lastAddedStudents);
router.route("/:id").get(getStudent).delete(deleteStudent).patch(updateStudent);

module.exports = router;
