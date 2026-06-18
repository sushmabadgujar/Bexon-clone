import React from "react";

import { Outlet,useLocation } from "react-router-dom";
import Sidebar from "../components/header.jsx";
import TopBar from "../components/topbar.jsx";
import "../assets/styles/header.css"
import "../assets/styles/topbar.css"
import "../assets/styles/profile.css"
import "../assets/styles/editprofile.css"
import "../assets/styles/dashboard.css";
const pageTitles = {
  "/dashboard": "Dashboard",
  "/team": "Add Team Member",
  "/team-list": "Team List",
  "/service": "Add Service",
  "/service-list": "Service List",
  "/portfolio": "Add Portfolio",
  "/portfolio-list": "Portfolio List",
  "/blog": "Add Blog",
  "/blog-list": "Blog List",
   "/price-plan": "Add Pricing Plan",
  "/price-plan-list": "Pricing Plan List",
  "/career": "Add Career Detail",
  "/career-list": "Opening Vacancy List",
};
const AdminLayout = () => {
  const location = useLocation();
   const title = pageTitles[location.pathname] || "Dashboard";

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
          {/* PAGE HEADER */}
          <div className="zn-pr-pageHeader p-3 mb-0">

            <div className="zn-pr-breadcrumb">
             Dashboard
              <span>›</span>
               {title}
            </div>

            <h2 className="zn-pr-pageTitle">
              {title}
            </h2>
          </div>
          <Outlet />

        </div>
      </div>
    </div>
  );
};

export default AdminLayout;