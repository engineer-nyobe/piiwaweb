import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, TextField } from "@mui/material";
import { GetSessionbyId, GetSpById } from "../../API/Spqueries";
import { useNavigate } from "react-router-dom";

import Spbar from "../COMPONENTS/Spbar";

import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import Sptransactions from "../COMPONENTS/Sptransactions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function SpInfos() {
  const { id } = useParams();
  const [sPoint, setsPoint] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [session,setsession]=useState("");
  

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getServicepoint = async () => {
    const data = await GetSpById(id);
    setsPoint(data);
  };

 

  useEffect(() => {
    getServicepoint();
  }, []);

  return (
    <Fragment>
      <Spbar />
      {sPoint && (
        <Box sx={{ margin: 2 }}>
          <div>
            <TextField
              id="outlined-basic"
              label="sp id"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              value={sPoint.account ? sPoint._id : "no sp"}
            />
            <TextField
              id="outlined-basic"
              label="sp name"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              value={sPoint.account ? sPoint.name : "no sp"}
            />
            <TextField
              id="outlined-basic"
              label="latitude"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              value={sPoint.account ? sPoint.latitude : "no latitude"}
            />
            <TextField
              id="outlined-basic"
              label="longitude"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              value={sPoint.account ? sPoint.longitude : "no longitude"}
            />
            <TextField
              id="outlined-basic"
              label="account type"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              value={
                sPoint.account ? sPoint.account.accounttype : "no account sp"
              }
            />
            <TextField
              id="outlined-basic"
              label="amount account"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              value={
                sPoint.account
                  ? sPoint.account && sPoint.account.amount
                  : "no account sp"
              }
            />
          </div>
          <div className="div">
            <Paper sx={{ overflow: "hidden", maxWidth: 700 }}>
              <Typography variant="h4">SESSIONS</Typography>
              <TableContainer component={Paper}>
                <Table
                  sx={{ width: "100%" }}
                  stickyHeader
                  aria-label="sticky table"
                >
                  <TableHead sx={{ color: "blue" }}>
                    <TableRow>
                      <StyledTableCell>session ID</StyledTableCell>
                      <StyledTableCell align="right">start</StyledTableCell>
                      <StyledTableCell align="right">end</StyledTableCell>
                      <StyledTableCell align="right">manager</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sPoint &&
                      sPoint.account &&
                      sPoint.account.sessions &&
                      sPoint.account.sessions
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow
                            key={row._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              cursor: "pointer",
                              "&:hover": { backgroundColor: "gray" },
                            }}
                            onClick={() => setsession(row._id)}
                          >
                            <TableCell component="th" scope="row">
                              {row._id}
                            </TableCell>
                            <TableCell align="right">{row.start}</TableCell>
                            <TableCell align="right">
                              {row.end ? row.end : "running"}
                            </TableCell>
                            <TableCell align="right">
                              {row.manager.phone}
                            </TableCell>
                          </TableRow>
                        ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={
                  sPoint &&
                  sPoint.account &&
                  sPoint.account.sessions &&
                  sPoint.account.sessions.length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
          <div>
            {session ? (
              <Sptransactions id={session} />
            ) : (
              <Typography></Typography>
            )}
          </div>
        </Box>
      )}
    </Fragment>
  );
}

export default SpInfos;
