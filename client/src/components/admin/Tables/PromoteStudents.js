import { Link } from "@mui/material";
import React from "react";

function PromoteStudents() {
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Promoted From</th>
            <th>Promoted To</th>
            <th>Fee Increment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <tr>
              <td>{item}</td>
              <td>
                <Link
                  href="/admin/view-promote"
                  sx={{ textDecoration: "none" }}
                >
                  02-03-2021
                </Link>
              </td>
              <td>Play Group </td>
              <td>KG (JUNIORS)</td>
              <td> 10 </td>
              <td>Approved</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PromoteStudents;
