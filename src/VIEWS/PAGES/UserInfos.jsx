import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetUserById } from "../../API/UsersQueries";
import {
  Grid,
  TextField,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import TopBar from "../COMPONENTS/TopBar";

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

const UserInfos = () => {
  const { id } = useParams();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [UserData, setUserData] = useState({});
  //const [UserData, setUserData] = useState({});

  const getUserInfo = async () => {
    const data = await GetUserById(id);
    setUserData(data);
  };

 

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <TopBar />
      {UserData ? (
        <Grid container spacing={2}>
          {
            //console.log(UserData)
          }
          <Grid item sm={6} md={3} lg={6}>
            <Card>
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={UserData.phone ? UserData.phone : 0}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Amount of Account"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={UserData.account ? UserData.account.amount : 0}
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="user name"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={
                      UserData.username ? UserData.username : "no user name"
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="User role"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={
                      UserData.account ? UserData.account.accounttype : "simple"
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="User company"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={
                      UserData.company ? UserData.company : "no user company"
                    }
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={3} lg={4}>
            <Card sx={{ maxWidth: 700 }}>
              <CardContent>
                <Typography>{UserData._id} </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={10} md={6}>
            <Paper sx={{ overflow: "hidden" }}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  stickyHeader
                  aria-label="sticky table"
                >
                  <TableHead sx={{ color: "blue" }}>
                    <TableRow>
                      <StyledTableCell>Transaction ID</StyledTableCell>
                      <StyledTableCell align="right">Sender</StyledTableCell>
                      <StyledTableCell align="right">Receiver</StyledTableCell>
                      <StyledTableCell align="right">Amount</StyledTableCell>
                      <StyledTableCell align="right">
                        Transaction Type
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {UserData &&
                      UserData.account &&
                      UserData.account.transactions &&
                      UserData.account.transactions
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow
                            key={row._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row._id}
                            </TableCell>
                            <TableCell align="right">
                              {row.sender.owner.phone}
                            </TableCell>
                            <TableCell align="right">
                              {row.receiver.owner.phone}
                            </TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="center">
                              {row.operationtype}
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
                  UserData &&
                  UserData.account &&
                  UserData.account.transactions.length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <div>
          <h2>NO USER FOUND</h2>
        </div>
      )}
    </div>
  );
};

export default UserInfos;
