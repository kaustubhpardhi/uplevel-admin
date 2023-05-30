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
import { MdAssignment } from "react-icons/md";
import React, { useEffect } from "react";

const columns = [
  { id: "name", label: " Assignment Name", minWidth: 170 },
  { id: "domain", label: "Assignment Domain", minWidth: 100 },
  {
    id: "id",
    label: "Student ID",
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
    id: "submissionId",
    label: "Submission ID",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(0),
  },
  {
    id: "badges",
    label: "Assign Badges",
    minWidth: 130,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function Submission() {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  function createData(name, domain, id, level, url, submissionId) {
    return { name, domain, id, level, url, submissionId };
  }
  const rows = submissions.map((submission) =>
    createData(
      submission.assignmentName,
      submission.assignmentDomain,
      submission.studentId,
      submission.assignmentLevel,
      submission.submissionUrl,
      submission.submissionId
    )
  );
  console.log(rows);

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/assignment/submissions");
        setSubmissions(response.data.submissions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
                  .map((submission) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={submission.studentId}
                      >
                        {columns.map((column) => {
                          const value = submission[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                fontFamily: "poppins",
                              }}
                            >
                              {column.id === "badges" ? (
                                <div className="badge-icon">
                                  <MdAssignment
                                    onClick={() =>
                                      handleAssignBadges(submission)
                                    }
                                  >
                                    Assign Badges
                                  </MdAssignment>
                                </div>
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
