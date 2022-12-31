import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  GetUpdatingUser,
  GetUserById,
  UpdateUserData,
} from "../../API/UsersQueries";
import {
  CreateAccount,
  UpdateAmountAccount,
  UpdateTypeAccount,
} from "../../API/AccountQueries";

const defaultuser = {
  phone: "",
  password: "",
  usertype: "",
  username: "",
  usernic: "",
};
const defaultaccount = {
  owner: "",
};

function UpdateUser() {
  const [user, setUser] = useState(defaultuser);
  const { phone, password, usertype, username, usernic } = user;

  const [storedUser, setStoredUser] = useState({});

  const [ownerAccount, setOwnerAccount] = useState(defaultaccount);

  const defaultamount = {
    amount: 0,
  };
  const [userAccount, setUserAccount] = useState(defaultamount);
  const { amount } = userAccount;

  const defaulttype = {
    type: "",
  };
  const [userAccounttype, setUserAccounttype] = useState(defaulttype);
  const { type } = userAccounttype;

  const [accountCreated, setAccountCreated] = useState({});

  const { id } = useParams();

  const getStoredUser = async (id) => {
    const data = await GetUpdatingUser(id);
    setStoredUser(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await UpdateUserData(id, user);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateaccount = async (e) => {
    e.preventDefault();
    setOwnerAccount({ ...ownerAccount, owner: id });
    try {
      const { data } = await CreateAccount(ownerAccount);
      setAccountCreated(data);
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const updateUserAccount = async (e) => {
    e.preventDefault();
    try {
      const { data } = await UpdateAmountAccount(
        storedUser.account._id,
        userAccount
      );
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
    try {
      const { data } = await UpdateTypeAccount(
        storedUser.account._id,
        userAccounttype
      );
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const handleClear = () => {
    setUser(defaultuser);
    setUserAccount({
      amount: 0,
    });
    setUserAccounttype({
      type: "",
    });
  };

  useEffect(() => {
    getStoredUser(id);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ margin: 2 }}
        autoComplete="off"
        component="form"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">{id}</Typography>
        <Typography variant="h5">update user</Typography>
        <TextField
          label="full name"
          variant="outlined"
          type="text"
          value={username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
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
          type="account"
          value={password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <TextField
          label="user nic"
          variant="outlined"
          type="text"
          value={usernic ? usernic : 0}
          onChange={(e) => setUser({ ...user, usernic: e.target.value })}
        />
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="user_role">user role</InputLabel>
            <Select
              labelId="user_role"
              id="user_role"
              value={usertype}
              label="user role"
              onChange={(e) => setUser({ ...user, usertype: e.target.value })}
            >
              <MenuItem value="simple">SIMPLE</MenuItem>
              <MenuItem value="spm">SPM</MenuItem>
              <MenuItem value="manager">MANAGER</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div>
          <Button onClick={handleClear} variant="contained">
            CLEAR
          </Button>
          <Button onClick={handleCreateaccount} variant="contained">
            CREATE ACCOUNT
          </Button>
          <Button type="Submit" onClick={handleSubmit} variant="contained">
            Update user
          </Button>
        </div>
      </Box>
      <Box
        sx={{ margin: 2 }}
        autoComplete="off"
        component="form"
        noValidate
        onSubmit={updateUserAccount}
      >
        <Typography variant="h5">update user account</Typography>
        <TextField
          label="user account"
          variant="outlined"
          defaultValue={0}
          type="number"
          value={amount}
          onChange={(e) =>
            setUserAccount({ ...userAccount, amount: e.target.value })
          }
        />
        <TextField
          label="user account type"
          variant="outlined"
          type="text"
          value={type}
          onChange={(e) =>
            setUserAccounttype({ ...userAccounttype, type: e.target.value })
          }
        />
        <div>
          <Button onClick={handleClear} variant="contained">
            CLEAR
          </Button>
          <Button type="Submit" onClick={updateUserAccount} variant="contained">
            Update user account
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default UpdateUser;
