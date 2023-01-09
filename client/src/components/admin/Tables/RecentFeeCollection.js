import React from "react";

function RecentFeeCollection() {
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Rcpt #</th>
            <th>Voucher #</th>
            <th>Due Date</th>
            <th>Payment Date</th>
            <th>Pay Type</th>
            <th>Detail</th>
            <th>Late Fee Chrgs</th>
            <th>Fee Amount</th>
            <th>Total Rcvd</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <tr>
              <td>5227</td>
              <td>5605390722-134</td>
              <td>07-07-2022</td>
              <td>22-07-2022</td>
              <td>Cash</td>
              <td>PAYMENT RECEIVED</td>
              <td>0.00</td>
              <td>2,500.00</td>
              <td>2,500.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentFeeCollection;
