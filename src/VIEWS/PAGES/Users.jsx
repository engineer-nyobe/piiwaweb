import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import TopBar from "../COMPONENTS/TopBar";
import { GetAllUsers } from "../../API/UsersQueries";

import { useNavigate } from "react-router-dom";



const Users = () => {

  const navigate=useNavigate();

  const columns = [
    { id: '_id', label: "User Id", minWidth: 100 },
    { id: "phone", label: "USER PHONE", minWidth: 100 },
    {
      id: 'username',
      label: "USER NAME",
      minWidth: 100,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "role",
      label: "USER ROLE",
      minWidth: 100,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "company",
      label: "USER COMPANY",
      minWidth: 100,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const getUserData = async () => {
    const data = await GetAllUsers();
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);


  return (
    <div className="div">
      <TopBar />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper sx={{ width: "80%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 800 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {userData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row._id}
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigate(`/users/${row._id}`)}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
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
            count={userData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
};

export default Users;
