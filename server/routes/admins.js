const express = require("express");
const router = express.Router();

const {
  changePassword,
  getSchool,
  updateSchool,
  deleteSchool,
  createSchool,
} = require("../controllers/admins");

router
  .route("/")
  .post(createSchool)
  .get(getSchool)
  .patch(updateSchool)
  .delete(deleteSchool);
                                       
router.route("/change-password").patch(changePassword);

module.exports = router;
