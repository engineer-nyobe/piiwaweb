import React, { useState, useEffect, Fragment } from "react";
import { GetServicePoint } from "../../API/Spqueries";
import {  Box } from "@mui/material";
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function SpHome() {
  const [servicePoint, setServicePoint] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();

  const getService = async () => {
    const data = await GetServicePoint();
    setServicePoint(data);
  };

  useEffect(() => {
    getService();
  }, []);

  return (
    <Fragment>
      <Spbar />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper sx={{ overflow: "hidden", maxWidth: 900 }}>
          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }} stickyHeader aria-label="sticky table">
              <TableHead sx={{ color: "blue" }}>
                <TableRow>
                  <StyledTableCell>Servicepoint ID</StyledTableCell>
                  <StyledTableCell align="right">name</StyledTableCell>
                  <StyledTableCell align="right">account</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {servicePoint &&
                  servicePoint
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        key={row._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "gray" },
                        }}
                        onClick={() => navigate(`/servicepoint/${row._id}`)}
                      >
                        <TableCell component="th" scope="row">
                          {row._id}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.account}</TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={servicePoint.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Fragment>
  );
}

export default SpHome;
