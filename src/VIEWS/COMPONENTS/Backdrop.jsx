import React from "react";

const Backdrop = ({ sideBar,closeSidebar }) => {
  return (
    <div
      className={sideBar ? "Backdrop Backdrop--open" : "Backdrop"}
      onClick={closeSidebar}
    ></div>
  );
};

export default Backdrop;
