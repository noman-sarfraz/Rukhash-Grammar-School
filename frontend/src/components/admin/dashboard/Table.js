import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

function createData(
  sr,
  voucherID,
  roll,
  studentName,
  Class,
  fee,
  date,
  dueDate,
  totalFee,
  rcvdFee,
  balance,
  status
) {
  return {
    sr,
    voucherID,
    roll,
    studentName,
    Class,
    fee,
    date,
    dueDate,
    totalFee,
    rcvdFee,
    balance,
    status,
  };
}
// Sr #	Voucher ID	Roll #	Student Name	Class	Fee Date	Due Date	Total Fee	Rcvd Amount	Balance	Status
const rows = [
  createData(
    1,
    "5605390722-1",
    1,
    "AYAN ALI",
    "Play Group",
    600,
    "01-07-2022",
    "07-07-2022",
    600.0,
    0.0,
    600.0,
    "Pending"
  ),
  createData(
    1,
    "5605390722-1",
    1,
    "AYAN ALI",
    "Play Group",
    600,
    "01-07-2022",
    "07-07-2022",
    600.0,
    0.0,
    600.0,
    "Pending"
  ),
  createData(
    1,
    "5605390722-1",
    1,
    "AYAN ALI",
    "Play Group",
    600,
    "01-07-2022",
    "07-07-2022",
    600.0,
    0.0,
    600.0,
    "Pending"
  ),
  createData(
    1,
    "5605390722-1",
    1,
    "AYAN ALI",
    "Play Group",
    600,
    "01-07-2022",
    "07-07-2022",
    600.0,
    0.0,
    600.0,
    "Pending"
  ),
  createData(
    1,
    "5605390722-1",
    1,
    "AYAN ALI",
    "Play Group",
    600,
    "01-07-2022",
    "07-07-2022",
    600.0,
    0.0,
    600.0,
    "Pending"
  ),
  createData(
    1,
    "5605390722-1",
    1,
    "AYAN ALI",
    "Play Group",
    600,
    "01-07-2022",
    "07-07-2022",
    600.0,
    0.0,
    600.0,
    "Pending"
  ),
];

export default function BasicTable() {
  return (
    // <Box sx={{ position: "relative" }}>
    <TableContainer
      component={Paper}
      sx={{ position: "relative", overflowX: "auto" }}
    >
      <Table
        sx={{
          position: "relative",
        }}
        size="small"
        aria-label="simple table"
      >
        <TableHead sx={{ bgcolor: "#efefef" }}>
          <TableRow>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>Sr #</TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>
              Voucher ID
            </TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>Roll #</TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>
              Student Name
            </TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>Class</TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>Fee</TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>Date</TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>
              Due Date
            </TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>
              Total Fee
            </TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>
              Rcvd Amount
            </TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>
              Balance
            </TableCell>
            <TableCell sx={{ fontSize: 12, fontWeight: 600 }}>Status</TableCell>
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": {
                  // border: "1px solid",
                },
                p: 0,
                m: 0,
              }}
            >
              <TableCell sx={{ fontSize: 12 }}>{row.sr}</TableCell>
              {/* width: "12%" */}
              <TableCell sx={{ fontSize: 12 }}>{row.voucherID}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.roll}</TableCell>
              {/* width: "10%" */}
              <TableCell sx={{ fontSize: 12 }}>{row.studentName}</TableCell>
              {/* width: "12%" */}
              <TableCell sx={{ fontSize: 12 }}>{row.Class}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.fee}</TableCell>
              {/* width: "13%" */}
              <TableCell sx={{ fontSize: 12 }}>{row.date}</TableCell>
              {/* width: "13%" */}
              <TableCell sx={{ fontSize: 12 }}>{row.dueDate}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.totalFee}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.rcvdFee}</TableCell>
              {/* width: "10%" */}
              <TableCell sx={{ fontSize: 12 }}>{row.balance}</TableCell>
              {/* width: "10%" */}
              <TableCell sx={{ fontSize: 12 }}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // </Box>
  );
}
