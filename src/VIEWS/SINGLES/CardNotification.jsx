import React from 'react'
import { Card,Typography,CardActionArea } from '@mui/material';

const CardNotification = ({ request }) => {
  return <Card sx={{backgroundColor:request.color, margin:1, padding:1}} >
    <CardActionArea>
        <Typography variant='h5' color="white" >{request.nbnot}</Typography>
        <Typography variant='h6' color="white" >{request.title}</Typography>
        <Typography variant='h7' color="yellow" >{request.content}</Typography>
    </CardActionArea>
  </Card>;
};

export default CardNotification