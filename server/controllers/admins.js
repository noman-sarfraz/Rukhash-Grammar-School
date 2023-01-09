const { StatusCodes } = require("http-status-codes");
const School = require("./../models/School");
const Admin = require("./../models/Admin");
const {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
} = require("./../errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createSchool = async (req, res) => {
  const school = await School.create({...req.body, owner: req.user.userId});
  res.status(StatusCodes.CREATED).json({ school });
};

const changePassword = async (req, res) => {
  const {
    oldPassword,
    newPassword,
  } = req.body;

  const admin = await Admin.findById(req.user.userId).exec();
  if (!admin) {
    throw new UnauthenticatedError("Invalid User!");
  }
  const isPasswordCorrect = await admin.comparePassword(req.body.oldPassword);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Wrong Password!");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  const newAdmin = await Admin.findByIdAndUpdate(
    { _id: req.user.userId },
    { password: hashedPassword },
    { new: true, runValidators: true }
  );
  if (!newAdmin) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Something went wrong" });
  }
  res.status(StatusCodes.OK).json({ newPassword: newPassword });
};

const getSchool = async (req, res) => {
const school = await School.findOne({owner: req.user.userId});
res.status(StatusCodes.OK).json({ school });};

const updateSchool = async (req, res) => {
const school = await School.findOneAndUpdate(
  { owner: req.user.userId },
  req.body,
  { new: true, runValidators: true }
);
if (!school) {
  throw new NotFoundError(`No school with id: ${req.user.userId}`);
}
res.status(StatusCodes.OK).json({ school });};

const deleteSchool = async (req, res) => {
const school = await School.findOneAndRemove({
  owner: req.user.userId,
});
if (!school) {
  throw new NotFoundError(`No such school with id: ${req.user.userId}`);
}
res.status(StatusCodes.OK).json({ success: true });};

module.exports = {
  changePassword,
  getSchool,
  updateSchool,
  deleteSchool,
  createSchool,
};
