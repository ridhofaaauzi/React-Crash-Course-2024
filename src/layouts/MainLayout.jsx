import React from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
