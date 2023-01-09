const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide first name"],
      maxlength: 50,
    },
    lastName: {
      type: String,
      maxlength: 50,
    },
    gender: {
      type: String,
      enum: ["", "Male", "Female"],
    },
    branch: {
      type: String,
      maxlength: 50,
    },
    code: {
      type: String,
      maxlength: 50,
    },
    department: {
      type: String,
      maxlength: 50,
    },
    designation: {
      type: String,
      maxlength: 50,
    },
    dateOfBirth: {
      type: Date,
    },
    dateOfJoining: {
      type: Date,
    },
    address: {
      type: String,
      maxlength: 100,
    },
    city: {
      type: String,
      maxlength: 50,
    },
    country: {
      type: String,
      maxlength: 50,
    },
    phone: {
      type: String,
      maxlength: 50,
    },
    mobile: {
      type: String,
      maxlength: 50,
    },
    email: {
      type: String,
      maxlength: 50,
    },
    salary: {
      type: Number,
    },
    loginId: {
      type: String,
      maxlength: 50,
    },
    password: {
      type: String,
      // minlength: 6,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
    },
    role: {
      type: String,
      maxlength: 50,
    },
    picture: {
      type: String,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);
