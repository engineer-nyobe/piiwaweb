import React, { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography, Box, Button, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import { GetSessionbyId } from "../../API/Spqueries";
import { CloseSession } from "../../API/SessionQueries";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function Sptransactions({ id }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [session, setsesion] = useState({});
  const [endsession, setEndSession] = useState({
    end: new Date()
  });
  const { end } = endsession;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const changeTransaction = async (id) => {
    const data = await GetSessionbyId(id);
    setsesion(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await CloseSession(id, endsession);
    console.log(data);
  };

  useEffect(() => {
    changeTransaction(id);
  }, [id]);

  return (
    <div className="div">
      <Paper sx={{ overflow: "hidden", maxWidth: 700 }}>
        <Typography variant="h4">TRANSACTIONS</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} stickyHeader aria-label="sticky table">
            <TableHead sx={{ color: "blue" }}>
              <TableRow>
                <StyledTableCell>Created At</StyledTableCell>
                <StyledTableCell align="right">amount</StyledTableCell>
                <StyledTableCell align="right">operation type</StyledTableCell>
                <StyledTableCell align="right">sender</StyledTableCell>
                <StyledTableCell align="right">receiver</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {session ? (
                session.transactions &&
                session.transactions
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "gray" },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.createdat}
                      </TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">{row.operationtype}</TableCell>
                      <TableCell align="right">
                        {row.sender && row.sender.owner
                          ? row.sender.owner.phone
                          : ""}
                      </TableCell>
                      <TableCell align="right">
                        {row.receiver && row.receiver.owner
                          ? row.receiver.owner.phone
                          : ""}
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <Typography>no data</Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={session && session.transactions && session.transactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Box
          sx={{ margin: 2 }}
          autoComplete="off"
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <div>
            <Typography>{id}</Typography>
          </div>
            <TextField
              label="Date end session"
              variant="outlined"
              type="datetime-local"
              value={end}
              onChange={(e) =>
                setEndSession({ ...endsession, end: e.target.value })
              }
            />
          <Button type="Submit" onClick={handleSubmit} variant="contained">
            close Session
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default Sptransactions;
