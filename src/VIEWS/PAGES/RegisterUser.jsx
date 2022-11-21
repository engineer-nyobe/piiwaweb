import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function RegisterUser() {
    const navigate = useNavigate();
  return (
    <div>
      <h3>RegisterUser</h3>
      <Button color="inherit" onClick={() => navigate("/home")}>
        HOME
      </Button>
    </div>
  );
}

export default RegisterUser