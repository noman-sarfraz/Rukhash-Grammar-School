import React from "react";

function UserRoles() {
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th># </th>
            <th>User Role</th>
            <th> Status</th>
          </tr>
        </thead>
        <tbody>
          {[1].map((item, index) => (
            <tr>
              <td>1 </td>
              <td>Administrator </td>
              <td>Approved</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserRoles;
