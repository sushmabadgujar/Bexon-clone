
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FiSearch,
  FiMoon,
  FiBell,
  FiPlus,
} from "react-icons/fi";

import { HiOutlineColorSwatch } from "react-icons/hi";

const TopBar = () => {
  const [form, setForm] = useState({
          firstName: "",
          lastName: "",
          email: "",
          bio: "",
           profilePic: ""
      });
   useEffect(() => {
          const fetchUser = async () => {
              try {
                  const res = await axios.get(
                      "http://localhost:5000/api/auth/profile",
                      { withCredentials: true }
                  );
  
                  setForm(res.data.user);
                  // setPreview(res.data.user.profilePic);
              } catch (err) {
                  console.log(err);
              }
          };
  
          fetchUser();
      }, []);
  return (
    <header className="bxn-topbar">

      {/* LEFT */}
      <div className="bxn-topbar-left">

        <div className="bxn-topbar-searchBox">

          <FiSearch className="bxn-topbar-searchIcon" />

          <input
            type="text"
            placeholder="Search anything..."
            className="bxn-topbar-input"
          />

          <span className="bxn-topbar-shortcut">
            ⌘K
          </span>

        </div>

      </div>

      {/* RIGHT */}
      <div className="bxn-topbar-actions">

        <button className="bxn-topbar-btn">
          <FiPlus />
          <span>New Order</span>
        </button>

        <div className="bxn-topbar-divider"></div>

        <button className="bxn-topbar-iconBtn">
          <FiMoon />
        </button>

        <button className="bxn-topbar-iconBtn">
          <HiOutlineColorSwatch />
        </button>

        <button className="bxn-topbar-iconBtn bxn-notification">
          <FiBell />
          <span className="bxn-dot"></span>
        </button>
      <div className="dropdown">
        <div className="bxn-topbar-avatar dropdown-toggle d-flex align-items-center justify-content-center bg-dark text-white rounded-circle"
        id="userDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
            width: "40px",
            height: "40px",
            cursor: "pointer",
            fontWeight: "600"
        }}>
        {`${form.firstName?.charAt(0) || ""}${form.lastName?.charAt(0) || ""}`}
        </div>
         <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown" style={{ width: "240px" }}>

        {/* USER INFO */}
        <li className="px-3 py-2">
            <div className="fw-bold">{form.firstName + " " + form.lastName}</div>
            <div className="text-muted small">{form.email}</div>
        </li>

        <li><hr className="dropdown-divider" /></li>

        {/* SETTINGS */}
        <li>
            <button className="dropdown-item">
                ⚙️ Settings
            </button>
        </li>

        {/* LOGOUT */}
        <li>
            <button className="dropdown-item text-danger">
                🚪 Logout
            </button>
        </li>

    </ul>
      </div>
        
      </div>
    </header>
  );
};

export default TopBar;