import React,{useState,useEffet, useEffect} from "react";
import Header from "../COMPONENTS/Header";
import NotificatoinBox from "../COMPONENTS/NotificatoinBox";
import ToolBar from "../COMPONENTS/ToolBar";
import Backdrop from "../COMPONENTS/Backdrop";
import Qrcode from "../SINGLES/Qrcode";

//import { GetAllUsers } from "../../API/UsersQueries";

const AdminHome = () => {

  const [sideBar,setSidebar] = useState(false);

  const toggleSideBar = ()=>{
    setSidebar((prevState) => !prevState);
  }


  return (
    <div>
      <Header openSidebar={toggleSideBar} />
      <NotificatoinBox />
      <Qrcode />
      <Backdrop sideBar={sideBar} closeSidebar={toggleSideBar} />
      <ToolBar sideBar={sideBar} closeSidebar={toggleSideBar} />
    </div>
  );
};

export default AdminHome;
