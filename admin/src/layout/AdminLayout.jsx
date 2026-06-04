import React from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "../components/header.jsx";
import TopBar from "../components/topbar.jsx";
import "../assets/styles/header.css"
import "../assets/styles/topbar.css"
import "../assets/styles/profile.css"
import "../assets/styles/editprofile.css"
import "../assets/styles/dashboard.css";
const AdminLayout = () => {
  return (
    <div className="zn-layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="zn-main">

        {/* TOPBAR */}
        <TopBar />

        {/* PAGE CONTENT */}
        <div className="zn-page-content">

          <Outlet />

        </div>
      </div>
    </div>
  );
};

export default AdminLayout;