import React from "react";

function RecentExpense() {
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Sr#</th>
            <th>Date</th>
            <th>Detail</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 4, 5].map((item, index) => (
            <tr>
              <td>{item}</td>
              <td>09-08-2021</td>
              <td>Rent paid</td>
              <td>45,000.00</td>
              <td>Approved</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentExpense;
