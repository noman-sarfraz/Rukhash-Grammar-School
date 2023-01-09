import React from "react";

function NewPromote() {
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Roll #</th>
            <th>Student Name</th>
            <th>Father Name </th>
            <th>Monthly Fee</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <tr>
              <td>1 </td>
              <td>ISHAL SAADAN BUTT</td>
              <td>SAADAN BUTT </td>
              <td>1000</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewPromote;
