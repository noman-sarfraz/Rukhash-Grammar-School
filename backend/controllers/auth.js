const { StatusCodes } = require("http-status-codes");
const Admin = require("./../models/Admin");
const {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
} = require("./../errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  // res.status(200).json({ message: "login", body: req.body });
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const admin = await Admin.findOne({ email: email });
  if (!admin) {
    throw new UnauthenticatedError("Invalid Credentials!");
  }
  const isPasswordCorrect = await admin.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = admin.createJWT();
  res
    .status(StatusCodes.OK)
    .json({ user: { name: admin.name, role: "admin" }, token });
};

module.exports = {
  // register,
  login,
};
