const Teacher = require("../models/Teacher");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getTeacher = async (req, res) => {
  // console.log(req.body);
    const teacher = await Teacher.findById(req.params.id).exec();
    res.status(StatusCodes.OK).json({ teacher });
};

const getAllTeachers = async (req, res) => {
  const teachers = await Teacher.find({}).sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json({ teachers, count: teachers.length });
};


const createTeacher = async (req, res) => {
  // console.log(req.body);
  const teacher = await Teacher.create(req.body);
  res.status(StatusCodes.CREATED).json({ teacher });
};

const deleteTeacher = async (req, res) => {
  // console.log(req.params.id);
  const teacher = await Teacher.findByIdAndRemove({
    _id: req.params.id,
  });
  if (!teacher) {
    throw new NotFoundError(`No such teacher with id: ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ success: true });
};

const updateTeacher = async (req, res) => {
  // console.log(req.body);
  // console.log(req.params.id);
  const teacher = await Teacher.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  );
  if (!teacher) {
    throw new NotFoundError(`No teacher with id: ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ teacher });
};

module.exports = {
  getAllTeachers,
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
