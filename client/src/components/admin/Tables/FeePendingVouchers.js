import React from "react";

function FeePendingVouchers() {
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Sr #</th>
            <th>Voucher ID</th>
            <th> Fee Date </th>
            <th>Due Date </th>
            <th>Status </th>
            <th>Total Fee </th>
            <th>Rcvd Amount </th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((item, index) => (
            <tr>
              <td>{item}</td>
              <td>5605390622-1</td>
              <td> 01-06-2022 </td>
              <td>07-06-2022 </td>
              <td>Pending </td>
              <td>600.00 </td>
              <td>0.00 x</td>
              <td>600.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeePendingVouchers;
