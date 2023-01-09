const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    regNo: {
      type: String,
      required: [true, "Please provide registration number"],
      maxlength: 30,
    },
    rollNo: {
      type: String,
      required: [true, "Please provide registration number"],
      maxlength: 30,
    },
    name: {
      type: String,
      required: [true, "Please provide name"],
      maxlength: 50,
    },
    class: {
      type: String,
      required: [true, "Please provide class"],
      maxlength: 30,
    },
    gender: {
      type: String,
      enum: ["", "Male", "Female", "Other"],
    },
    fatherName: {
      type: String,
      maxlength: 50,
    },
    motherName: {
      type: String,
      maxlength: 50,
    },
    dateOfBirth: {
      type: Date,
    },
    admissionDate: {
      type: Date,
    },
    category: {
      type: String,
      enum: ["", "Normal", "Special"],
    },
    religion: {
      type: String,
      maxlength: 30,
    },
    bloodGroup: {
      type: String,
      enum: ["", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    status: {
      type: String,
      enum: ["", "Active", "Inactive"],
    },
    phoneOffice: {
      type: String,
      maxlength: 30,
    },
    phoneResidence: {
      type: String,
      maxlength: 30,
    },
    mobileOffice: {
      type: String,
      maxlength: 30,
    },
    mobileResidence: {
      type: String,
      maxlength: 30,
    },
    email: {
      type: String,
      maxlength: 50,
      // match: [
      //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      //   "Provide valid email",
      // ],
    },
    cnicNo: {
      type: String,
      maxlength: 30,
    },
    bFormNo: {
      type: String,
      maxlength: 30,
    },
    address: {
      type: String,
      maxlength: 100,
    },
    city: {
      type: String,
      maxlength: 30,
    },
    country: {
      type: String,
      maxlength: 30,
    },
    monthlyFee: {
      type: Number,
    },
    admissionFee: {
      type: Number,
    },
    transportFee: {
      type: Number,
    },
    routes: {
      type: String,
      maxlength: 50,
    },
    comments: {
      type: String,
      maxlength: 100,
    },
    loginId: {
      type: String,
      maxlength: 30,
    },
    password: {
      type: String,
      // minlength: 6,
    },
    loginStatus: {
      type: String,
      enum: ["", "Active", "Inactive"],
    },
    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
