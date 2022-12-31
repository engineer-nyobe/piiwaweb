import React,{useState,useEffect} from "react";
import CardNotification from "../SINGLES/CardNotification";
import UserCard from "../SINGLES/UserCard";
import { Grid } from "@mui/material";
import Transactions from "../SINGLES/Transactions";
import ServicePoint from "../SINGLES/ServicePoint";

const BoxTest = [
  {
    title: "SUCCESS NOTIFICATOIONS",
    content: "lorem dsbii  qsqhk sfdhv dfb sdfsdfn sdfjb",
    nbnot: 10,
    color: "#0e58a5",
  },
  {
    title: "WARNING NOTIFICATOIONS",
    content: "lorem dsbii  qsqhk sfdhv dfb sdfsdfn sdfjb",
    nbnot: 10,
    color: "#0b74e0",
  },
  {
    title: "DANGER NOTIFICATOIONS",
    content: "lorem dsbii  qsqhk sfdhv dfb sdfsdfn sdfjb",
    nbnot: 10,
    color: "#1be964",
  },
  {
    title: "SIMPLE NOTIFICATOIONS",
    content: "lorem dsbii  qsqhk sfdhv dfb sdfsdfn sdfjb",
    nbnot: 10,
    color: "#20d49b",
  },
];

const NotificatoinBox = () => {

    const [requests,setRequest] = useState(BoxTest);
    
  return (
    <Grid container spacing={2}>
      {requests &&
        requests.map((request) => (
          <Grid item sx={12} sm={6} md={4} lg={3}>
            <CardNotification request={request} />
          </Grid>
        ))}
      <Grid item sx={12} sm={6} md={4} lg={3}>
        <UserCard />
      </Grid>
      <Grid item sx={12} sm={6} md={4} lg={3}>
        <Transactions />
      </Grid>
      <Grid item sx={12} sm={6} md={4} lg={3}>
        <ServicePoint />
      </Grid>
    </Grid>
  );
};

export default NotificatoinBox;
