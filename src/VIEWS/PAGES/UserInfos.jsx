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
  CardMedia,
} from "@mui/material";
import TopBar from "../COMPONENTS/TopBar";

const UserInfos = () => {
  const { id } = useParams();

  const [UserData, setUserData] = useState({});

  const getUserInfo = async () => {
    const data = await GetUserById(id);
    setUserData(data);
    console.log(data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <TopBar />
      {UserData ? (
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="500"
                image={UserData.userqrcode}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="User Phone"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={UserData.phone}
                  />
                  <TextField
                    id="outlined-basic"
                    label="User full name"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={UserData.username}
                  />
                  <TextField
                    id="outlined-basic"
                    label="User role"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={UserData.role}
                  />
                  <TextField
                    id="outlined-basic"
                    label="User company"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={UserData.company}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6}>
            <Card sx={{ maxWidth: 700 }}>
              <CardContent>
                <Typography>{UserData._id} </Typography>
              </CardContent>
            </Card>
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
