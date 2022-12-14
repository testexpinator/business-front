import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
const Proctected = () => {
  // console.log(<Outlet/>)
  let Token = localStorage.getItem("token");
  return Token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Proctected;
