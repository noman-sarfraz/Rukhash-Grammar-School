import { Link } from "@mui/material";
import React from "react";

function Users() {
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            {/* #	Name	Email / Login ID	 */}
            <th>#</th>
            <th>Name</th>
            <th>Email / Login ID</th>
            <th>Mobile</th>
            <th> Role</th>
            <th> Active </th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {[1].map((item, index) => (
            <tr>
              <td>563</td>
              <td>M Aamir</td>
              <td>aamir@gmail.com</td>
              <td></td>
              <td>Administrator</td>
              <td>Yes</td>
              <td>RUKHASH GRAMMMAR SCHOOL</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
