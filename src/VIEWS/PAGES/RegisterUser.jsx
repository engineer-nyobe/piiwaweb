import React, { useState } from "react";
import { Button, Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../API/UsersQueries";

const defaultuser = {
  phone: "",
  password: "",
};
function RegisterUser() {
  const [user, setUser] = useState(defaultuser);
  const { phone, password } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await CreateUser(user);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClear = () => {
    setUser(defaultuser);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Box
        sx={{ margin: 2 }}
        autoComplete="off"
        component="form"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography>CREATE USER</Typography>
        <TextField
          label="phone user"
          variant="outlined"
          type="number"
          value={phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <TextField
          label="password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <div>
          <Button onClick={handleClear} variant="contained">
            CLEAR
          </Button>
          <Button type="Submit" onClick={handleSubmit} variant="contained">
            SIGN UP
          </Button>
          <Button
            type="Submit"
            onClick={() => navigate("/users")}
            variant="contained"
          >
            users
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default RegisterUser;
