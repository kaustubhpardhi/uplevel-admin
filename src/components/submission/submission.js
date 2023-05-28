import "./submission.css";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "role", label: "Role", minWidth: 100 },
  {
    id: "domain",
    label: "Domain",
    minWidth: 190,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "level",
    label: "Level",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "url",
    label: "Submission URL",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "badges",
    label: "Assign Badges",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, role, domain, level, url) {
  return { name, role, domain, level, url };
}

const rows = [
  createData(
    "Kaustubh",
    "Backend Engineer",
    "Backend",
    "Hard",
    "https://submission"
  ),
  createData(
    "Kaustubh",
    "Backend Engineer",
    "Backend",
    "Hard",
    "https://submission"
  ),
  createData(
    "Kaustubh",
    "Backend Engineer",
    "Backend",
    "Hard",
    "https://submission"
  ),
  createData(
    "Kaustubh",
    "Backend Engineer",
    "Backend",
    "Hard",
    "https://submission"
  ),
  createData(
    "Kaustubh",
    "Backend Engineer",
    "Backend",
    "Hard",
    "https://submission"
  ),
  createData(
    "Kaustubh",
    "Backend Engineer",
    "Backend",
    "Hard",
    "https://submission"
  ),
  createData(
    "Kaustubh",
    "Backend Engineer",
    "Backend",
    "Hard",
    "https://submission"
  ),
  createData(
    "Kaustubh",
    "Backend Engineer",
    "Backend",
    "Hard",
    "https://submission"
  ),
  createData(
    "Kaustubh",
    "Backend Engineer",
    "Backend",
    "Hard",
    "https://submission"
  ),
];
function Submission() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleAssignBadges = (row) => {
    console.log(row);
    navigate("/badge", { state: { rowDetails: row } });
  };

  return (
    <div className="container-submission">
      <Navbar />
      <div className="submission-table">
        <div className="submission-heading">
          <p>Review assignment submissions and Assign badges</p>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              className="table-head"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#f9a826", // Set your desired background color
                        color: "#ffffff", // Set the text color
                        fontWeight: "bold",
                        fontFamily: "poppins", // Set the font weight
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      // Inside the TableRow in the TableBody
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                fontFamily: "poppins",
                              }}
                            >
                              {column.id === "badges" ? (
                                <button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => handleAssignBadges(row)}
                                >
                                  Assign Badges
                                </button>
                              ) : column.format && typeof value === "number" ? (
                                column.format(value)
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{
              backgroundColor: "whitesmoke",
              color: "black",
              fontFamily: "",
            }}
          />
        </Paper>
      </div>
    </div>
  );
}
export default Submission;
