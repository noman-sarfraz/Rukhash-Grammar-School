import React from "react";

function StudentPromoteView() {
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Sr #</th>
            <th>Date</th>
            <th>From Class</th>
            <th>To Class</th>
            <th>Roll #</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Old Monthly Fee</th>
            <th>New Monthly Fee</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <tr>
              <td>{item}</td>
              <td>02-03-2021</td>
              <td>Play Group</td>
              <td>KG (JUNIORS)</td>
              <td>1</td>
              <td>HAJRA YASEEN BUTT</td>
              <td>MUHAMMAD YASEEN BUTT</td>
              <td>1100</td>
              <td>1100</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentPromoteView;
