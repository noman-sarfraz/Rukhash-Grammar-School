import React from "react";
import "./CssTable.css";

function CssTable() {
  return (
    <div>
      <h2>HTML Table</h2>
      <div className="table-container">
        <table className="custom-table">
          <tr>
            {/* Sr #	Voucher ID	Roll #	Student Name	Class	Fee	Date	Due Date	Total Fee	Rcvd Amount	Balance	Status */}
            <th>Sr #</th>
            <th>Voucher ID</th>
            <th>Roll #</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Fee</th>
            <th>Date</th>
            <th>Due Date</th>
            <th>Total Fee</th>
            <th>Rcvd Amount</th>
            <th>Balance</th>
            <th>Status</th>
          </tr>
          <tr>
            {/* 1	5605390722-1	1	AYAN ALI	Play Group	600	01-07-2022	07-07-2022	600	0	600	Pending */}
            <td>1</td>
            <td>5605390722-1</td>
            <td>1</td>
            <td>AYAN ALI</td>
            <td>Play Group</td>
            <td>600</td>
            <td>01-07-2022</td>
            <td>07-07-2022</td>
            <td>600</td>
            <td>0</td>
            <td>600</td>
            <td>Pending</td>
          </tr>
          <tr>
            {/* 1	5605390722-1	1	AYAN ALI	Play Group	600	01-07-2022	07-07-2022	600	0	600	Pending */}
            <td>1</td>
            <td>5605390722-1</td>
            <td>1</td>
            <td>AYAN ALI</td>
            <td>Play Group</td>
            <td>600</td>
            <td>01-07-2022</td>
            <td>07-07-2022</td>
            <td>600</td>
            <td>0</td>
            <td>600</td>
            <td>Pending</td>
          </tr>
          <tr>
            {/* 1	5605390722-1	1	AYAN ALI	Play Group	600	01-07-2022	07-07-2022	600	0	600	Pending */}
            <td>1</td>
            <td>5605390722-1</td>
            <td>1</td>
            <td>AYAN ALI</td>
            <td>Play Group</td>
            <td>600</td>
            <td>01-07-2022</td>
            <td>07-07-2022</td>
            <td>600</td>
            <td>0</td>
            <td>600</td>
            <td>Pending</td>
          </tr>
          <tr>
            {/* 1	5605390722-1	1	AYAN ALI	Play Group	600	01-07-2022	07-07-2022	600	0	600	Pending */}
            <td>1</td>
            <td>5605390722-1</td>
            <td>1</td>
            <td>AYAN ALI</td>
            <td>Play Group</td>
            <td>600</td>
            <td>01-07-2022</td>
            <td>07-07-2022</td>
            <td>600</td>
            <td>0</td>
            <td>600</td>
            <td>Pending</td>
          </tr>
          <tr>
            {/* 1	5605390722-1	1	AYAN ALI	Play Group	600	01-07-2022	07-07-2022	600	0	600	Pending */}
            <td>1</td>
            <td>5605390722-1</td>
            <td>1</td>
            <td>AYAN ALI</td>
            <td>Play Group</td>
            <td>600</td>
            <td>01-07-2022</td>
            <td>07-07-2022</td>
            <td>600</td>
            <td>0</td>
            <td>600</td>
            <td>Pending</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CssTable;
