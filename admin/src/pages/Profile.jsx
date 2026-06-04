import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGlobe,
  FiCalendar,
  FiUsers,
  FiFolder,
  FiCheckCircle,
  FiAward,
  FiSettings,
  FiBell,
  FiShare2,
} from "react-icons/fi";


const Profile = () => {

  // DATABASE DATA
  const profileData = {
    name: "Aigars Silkalns",
    role: "Admin",
    department: "Engineering",
    email: "aigars@apex.dev",
    location: "Riga, Latvia",
    phone: "+371 2000 0000",
    website: "colorlib.com",
    joined: "March 2020",

    about:
      "Founder at Colorlib. Building beautiful web templates and admin dashboards. Passionate about clean UI, open-source, and making the web more accessible.",

    stats: [
      {
        title: "Projects",
        value: "12",
        icon: <FiFolder />,
      },
      {
        title: "Tasks Completed",
        value: "148",
        icon: <FiCheckCircle />,
      },
      {
        title: "Team Members",
        value: "8",
        icon: <FiUsers />,
      },
      {
        title: "Experience",
        value: "6 yrs",
        icon: <FiAward />,
      },
    ],

    skills: [
      {
        name: "React",
        percentage: 95,
        className: "zn-pr-skillBar--orange",
      },
      {
        name: "TypeScript",
        percentage: 90,
        className: "zn-pr-skillBar--green",
      },
      {
        name: "UI Design",
        percentage: 85,
        className: "zn-pr-skillBar--blue",
      },
      {
        name: "Node.js",
        percentage: 80,
        className: "zn-pr-skillBar--yellow",
      },
      {
        name: "DevOps",
        percentage: 65,
        className: "zn-pr-skillBar--gold",
      },
    ],
  };

  return (
    <div className="zn-pr-wrapper container-fluid">

      {/* PAGE HEADER */}
      <div className="zn-pr-pageHeader">

        <div className="zn-pr-breadcrumb">
          Dashboard
          <span>›</span>
          Profile
        </div>

        <h2 className="zn-pr-pageTitle">
          Profile
        </h2>

        <p className="zn-pr-pageSubTitle">
          View and manage your profile information.
        </p>
      </div>

      {/* PROFILE CARD */}
      <div className="zn-pr-profileCard">

        {/* COVER */}
        <div className="zn-pr-coverSection"></div>

        {/* PROFILE INFO */}
        <div className="zn-pr-profileContent">

          {/* LEFT */}
          <div className="zn-pr-profileLeft">

            {/* AVATAR */}
            <div className="zn-pr-avatar">
              AS
            </div>

            {/* USER INFO */}
            <div className="zn-pr-userInfo">

              <div className="zn-pr-userNameRow">
                <h3>{profileData.name}</h3>

                <span className="zn-pr-roleBadge">
                  {profileData.role}
                </span>
                
              </div>
     <p>
                {profileData.department}
              </p>
             

            </div>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="zn-pr-profileBtns">

            <NavLink to="/edit-profile"><button className="zn-pr-outlineBtn">
              <FiSettings />
              Edit Profile
            </button></NavLink>

            <button className="zn-pr-outlineBtn">
              <FiShare2 />
              Share
            </button>

          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="zn-pr-contactRow">

          <div className="zn-pr-contactItem">
            <FiMail />
            {profileData.email}
          </div>

          <div className="zn-pr-contactItem">
            <FiMapPin />
            {profileData.location}
          </div>

          <div className="zn-pr-contactItem">
            <FiPhone />
            {profileData.phone}
          </div>

          <div className="zn-pr-contactItem">
            <FiGlobe />
            {profileData.website}
          </div>

          <div className="zn-pr-contactItem">
            <FiCalendar />
            Joined {profileData.joined}
          </div>

        </div>
      </div>

      {/* TABS */}
      {/* <div className="zn-pr-tabs">

        <button className="zn-pr-tab zn-pr-tab--active">
          Overview
        </button>

        <button className="zn-pr-tab">
          Activity
        </button>

        <button className="zn-pr-tab">
          Connections
        </button>

      </div> */}

      {/* STATS */}
      {/* <div className="row g-4 mb-4">

        {profileData.stats.map((item, index) => (
          <div className="col-xl-3 col-md-6" key={index}>

            <div className="zn-pr-statCard">

              <div className="zn-pr-statIcon">
                {item.icon}
              </div>

              <div>
                <h3>{item.value}</h3>
                <p>{item.title}</p>
              </div>

            </div>
          </div>
        ))}
      </div> */}

      {/* CONTENT */}
      <div className="row g-4">

        {/* ABOUT */}
        <div className="col-xl-8">

          <div className="zn-pr-contentCard">

            <h4 className="zn-pr-cardTitle">
              About
            </h4>

            <p className="zn-pr-aboutText">
              {profileData.about}
            </p>

            <div className="row mt-4">

              <div className="col-md-6">

                <div className="zn-pr-infoBlock">
                  <span>Department</span>
                  <h6>{profileData.department}</h6>
                </div>

                <div className="zn-pr-infoBlock">
                  <span>Website</span>
                  <h6>{profileData.website}</h6>
                </div>

              </div>

              <div className="col-md-6">

                <div className="zn-pr-infoBlock">
                  <span>Location</span>
                  <h6>{profileData.location}</h6>
                </div>

                <div className="zn-pr-infoBlock">
                  <span>Member Since</span>
                  <h6>March 15, 2020</h6>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-xl-4">

          {/* SKILLS */}
          {/* <div className="zn-pr-contentCard mb-4">

            <h4 className="zn-pr-cardTitle">
              Skills & Expertise
            </h4>

            {profileData.skills.map((skill, index) => (
              <div className="zn-pr-skillItem" key={index}>

                <div className="zn-pr-skillTop">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>

                <div className="zn-pr-progress">

                  <div
                    className={`zn-pr-skillBar ${skill.className}`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>

                </div>
              </div>
            ))}
          </div> */}

          {/* QUICK ACTIONS */}
          <div className="zn-pr-contentCard">

            <h4 className="zn-pr-cardTitle">
              Quick Actions
            </h4>

            <button className="zn-pr-actionBtn">
              <FiSettings />
              Edit Profile
            </button>

            <button className="zn-pr-actionBtn">
              <FiMail />
              Email Settings
            </button>

            <button className="zn-pr-actionBtn">
              <FiBell />
              Notifications
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;