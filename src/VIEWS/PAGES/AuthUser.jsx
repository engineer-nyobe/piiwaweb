import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'

function AuthUser() {
  const navigate = useNavigate();
  return (
    <div>
      <Button color="inherit" onClick={() => navigate("/home")}>
        CLICK TO HOME
      </Button>
    </div>
  );
}

export default AuthUser