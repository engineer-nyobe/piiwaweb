import React from "react";
import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import { useNavigate } from "react-router-dom";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

const ToolBar = ({ sideBar, closeSidebar }) => {
  const homeHandle = () => {
    navigate("/home");
    closeSidebar();
  };
  const usersHandle = () =>{
    navigate("/users");
    closeSidebar();
  }
  const navigate = useNavigate();
  return (
    <div className={sideBar ? "side-bar side-bar--open" : "side-bar"}>
      <div className="side_line" onClick={homeHandle}>
        <HomeIcon sx={{ fontSize: 28 }} />
        <Typography variant="h5" className="">
          HOME
        </Typography>
      </div>
      <div className="side_line" onClick={usersHandle}>
        <GroupIcon sx={{ fontSize: 28 }} />
        <Typography variant="h5" className="">
          USERS
        </Typography>
      </div>
      <div className="side_line" onClick={closeSidebar}>
        <SupervisedUserCircleIcon sx={{ fontSize: 28 }} />
        <Typography variant="h5" className="">
          SELLERS
        </Typography>
      </div>
      <div className="side_line" onClick={closeSidebar}>
        <CurrencyExchangeIcon sx={{ fontSize: 28 }} />
        <Typography variant="h5" className="">
          SPM
        </Typography>
      </div>
    </div>
  );
};

export default ToolBar;
