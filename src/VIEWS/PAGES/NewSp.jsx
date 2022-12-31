import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { CreateServicePoint } from "../../API/Spqueries";
import Spbar from "../COMPONENTS/Spbar";

function NewSp() {
  const [spdata, setspdata] = useState({
    name: "",
    latitude: 0,
    longitude: 0,
  });
  const { name, latitude, longitude } = spdata;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const infos = CreateServicePoint(spdata);
      if (infos) {
        console.log(infos.data);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="div">
      <Spbar />
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
          <Typography variant="h4">NEW SERVICEPOINT</Typography>
          <div>
            <TextField
              label="name"
              variant="outlined"
              type="text"
              value={name}
              onChange={(e) => setspdata({ ...spdata, name: e.target.value })}
            />
          </div>
          <div className="latitude">
            <TextField
              label="latitude"
              variant="outlined"
              type="number"
              value={latitude}
              onChange={(e) =>
                setspdata({ ...spdata, latitude: e.target.value })
              }
            />
          </div>
          <div className="longitude">
            <TextField
              label="longitude"
              variant="outlined"
              type="number"
              value={longitude}
              onChange={(e) =>
                setspdata({ ...spdata, longitude: e.target.value })
              }
            />
          </div>
          <Button type="Submit" onClick={handleSubmit} variant="contained">
            CREATE SP
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default NewSp;
