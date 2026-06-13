import React from "react";
import { NavLink } from "react-router-dom";
import {
    BsGrid,
    BsShop,
    BsRocketTakeoff,
    BsGraphUp,
    BsCart3,
    BsBox,
    BsEnvelope,
    BsChevronDown,
    BsBoxArrowRight, BsTools, BsFolder,
    BsFileText,
    BsPeople,
    BsBriefcase,

} from "react-icons/bs";

const Sidebar = ({ setActivePage }) => {

    return (
        <aside className="zn-sidebar ">

            {/* LOGO */}
            <div className="zn-sidebar__logo">
                <div className="zn-sidebar__logo-icon">◇</div>

                <div>
                    <h4 className="zn-sidebar__title">Zenith</h4>
                    <span className="zn-sidebar__subtitle">DASHBOARD</span>
                </div>
            </div>

            {/* SCROLL */}
            <div className="zn-sidebar__scroll">

                {/* OVERVIEW */}
                <div className="zn-sidebar__section">

                    <div className="zn-sidebar__section-header">
                        <span>OVERVIEW</span>
                        <BsChevronDown />
                    </div>

                    <ul className="zn-sidebar__menu">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive
                                    ? "zn-sidebar__item zn-sidebar__item--active"
                                    : "zn-sidebar__item"
                            }
                        >
                            <BsGrid />
                            <span>Dashboard</span>
                        </NavLink>

                        <NavLink
                            to="/team"
                            className={({ isActive }) =>
                                isActive
                                    ? "zn-sidebar__item zn-sidebar__item--active"
                                    : "zn-sidebar__item"
                            }
                        >
                            <BsPeople />
                            <span>Team</span>
                        </NavLink>
                        <NavLink
                            to="/team-list"
                            className={({ isActive }) =>
                                isActive
                                    ? "zn-sidebar__item zn-sidebar__item--active"
                                    : "zn-sidebar__item"
                            }
                        >
                            <BsPeople />
                            <span>Team List</span>
                        </NavLink>
                        <NavLink
                            to="/career"
                            className={({ isActive }) =>
                                isActive
                                    ? "zn-sidebar__item zn-sidebar__item--active"
                                    : "zn-sidebar__item"
                            }
                        >
                            <BsBriefcase />
                            <span>Career</span>
                        </NavLink>


                        <NavLink
                            to="/service"
                            className={({ isActive }) =>
                                isActive
                                    ? "zn-sidebar__item zn-sidebar__item--active"
                                    : "zn-sidebar__item"
                            }
                        >
                            <BsTools />
                            <span>Services</span>
                        </NavLink>

                        <NavLink
                            to="/service-list"
                            className={({ isActive }) =>
                                isActive
                                    ? "zn-sidebar__item zn-sidebar__item--active"
                                    : "zn-sidebar__item"
                            }
                        >
                            <BsTools />
                            <span>Services List</span>
                        </NavLink>

                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) =>
                                isActive
                                    ? "zn-sidebar__item zn-sidebar__item--active"
                                    : "zn-sidebar__item"
                            }
                        >
                            <BsFolder />
                            <span>Portfolio</span>
                        </NavLink>
                            <NavLink
                            to="/portfolio-list"
                            className={({ isActive }) =>
                                isActive
                                    ? "zn-sidebar__item zn-sidebar__item--active"
                                    : "zn-sidebar__item"
                            }
                        >
                            <BsFolder />
                            <span>Portfolio List</span>
                        </NavLink>

                        <NavLink
                            to="/team"
                            className={({ isActive }) =>
                                isActive
                                    ? "zn-sidebar__item zn-sidebar__item--active"
                                    : "zn-sidebar__item"
                            }
                        >
                            <BsPeople />
                            <span>Team</span>
                        </NavLink>


                    </ul>
                </div>

                {/* COMMERCE */}
                <div className="zn-sidebar__section">

                    <div className="zn-sidebar__section-header">
                        <span>COMMERCE</span>
                        <BsChevronDown />
                    </div>

                    <ul className="zn-sidebar__menu">

                        <li className="zn-sidebar__item">
                            <BsCart3 />
                            <span>Orders</span>

                            <span className="zn-sidebar__badge">12</span>
                        </li>

                        <li className="zn-sidebar__item">
                            <BsBox />
                            <span>Products</span>
                        </li>

                        <li className="zn-sidebar__item">
                            <BsPeople />
                            <span>Customers</span>
                        </li>

                        <li className="zn-sidebar__item">
                            <BsFileText />
                            <span>Invoices</span>
                        </li>

                    </ul>
                </div>

                {/* APPS */}
                <div className="zn-sidebar__section">

                    <div className="zn-sidebar__section-header">
                        <span>APPS</span>
                        <BsChevronDown />
                    </div>

                    <ul className="zn-sidebar__menu">
                        <li className="zn-sidebar__item">
                            <BsEnvelope />
                            <span>Mail</span>
                        </li>
                    </ul>

                </div>
            </div>

            {/* FOOTER */}
            <div className="zn-sidebar__footer">

                <NavLink to="/profile" className="zn-sidebar__user">
                    <div className="zn-sidebar__avatar">AS</div>

                    <div>
                        <h5>Aigars S.</h5>
                        <span>Admin</span>
                    </div>
                </NavLink>

                <button className="zn-sidebar__logout">
                    <BsBoxArrowRight />
                </button>

            </div>
        </aside>
    );
};

export default Sidebar;