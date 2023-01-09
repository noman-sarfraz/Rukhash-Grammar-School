const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 3,
      maxlength: 50,
    },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "Admin",
      required: true,
    },
    ownerName: {
      type: String,
      maxlength: 50,
    },

    address: {
      type: String,
      maxlength: 100,
    },
    city: {
      type: String,
      maxlength: 50,
    },
    state: {
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
    nationalTaxNo: {
      type: String,
      maxlength: 50,
    },
    schoolUrl: {
      type: String,
      maxlength: 100,
    },
    addressOnPrint: {
      type: String,
      maxlength: 100,
    },
    showAddressOnPrint: {
      type: String,
      maxlength: 50,
    },
    showLogoOnPrint: {
      type: String,
      maxlength: 50,
    },
    logo: {
      type: String,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("School", SchoolSchema);
