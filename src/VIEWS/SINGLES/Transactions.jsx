import React, { useState, useEffect } from "react";
import { Card, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import { CountUsers } from "../../API/UsersQueries";

function Transactions() {
  const navigate = useNavigate();
  const [Unb, setUnb] = useState(10);

  useEffect(() => {
  }, []);
  return (
    <Card
      sx={{ backgroundColor: "#1be964", margin: 1, padding: 1 }}
      onClick={() => navigate("/transactions")}
    >
      <CardActionArea>
        <Typography variant="h5" color="white">
          {Unb}
        </Typography>
        <Typography variant="h6" color="white">
          SUCCESS TRANSACTIONS
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default Transactions;
