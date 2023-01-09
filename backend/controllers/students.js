const Student= require("./../models/Student");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("./../errors");

const getAllStudents = async (req, res) => {
  const students = await Student.find({  }).sort("createdAt");
  res.status(StatusCodes.OK).json({ students, count: students.length });
};

const getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id).exec();
  res.status(StatusCodes.OK).json({ student });
};


const deleteStudent = async (req, res) => {
  const student = await Student.findByIdAndRemove({
    _id: req.params.id,
  });
  if (!student) {
    throw new NotFoundError(`No such student with id: ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ success: true });
};

const updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  );
  if (!student) {
    throw new NotFoundError(`No student with id: ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ student });
};

const createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(StatusCodes.CREATED).json({ student });
};

const lastAddedStudents = async (req, res) => {
  const classes = [
    "PLAY GROUP",
    "KG (JUNIORS)",
    "KG (SENIORS)",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
  ];
  let lastStudents={}
  let student
  for(let i=0;i<classes.length;i++) {
    student = await Student.findOne({ class: classes[i] })
      .sort({ createdAt: -1 })
      .select("_id regNo rollNo name class")
      .limit(1);
    lastStudents[classes[i]] = student
  }
  let latestStudent = await Student.findOne()
    .sort({ createdAt: -1 })
    .select("_id regNo rollNo name class")  
    .limit(1);
  res.status(StatusCodes.OK).json({ latestStudent, lastStudents });
};


const createManyStudents = async (req, res) => {
  const {students} = req.body
  if(!students) {
    throw new BadRequestError('Please provide required data.')
  }

  let newStudents = []
  var newStudent
  for(let i=0;i<students.length;i++) {
    newStudent = await Student.create(students[i]);
    newStudents.push(newStudent);
  }
  res.status(StatusCodes.CREATED).json({ students: newStudents });
};


module.exports = {
  getAllStudents,
  getStudent,
  createStudent,
  createManyStudents,
  lastAddedStudents,
  updateStudent,
  deleteStudent,
};
