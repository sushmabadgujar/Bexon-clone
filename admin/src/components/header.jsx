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

                        {/* Dashboard */}
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

                        {/* Team Management */}
                        <li>
                            <a
                                className="zn-sidebar__item"
                                data-bs-toggle="collapse"
                                href="#teamMenu"
                                role="button"
                            >
                                <BsPeople />
                                <span className="ms-2">Team Management</span>
                                <BsChevronDown className="ms-auto" />
                            </a>

                            <div className="collapse" id="teamMenu">
                                <NavLink to="/team" className="zn-sidebar__subitem">
                                    Add Team Member
                                </NavLink>

                                <NavLink to="/team-list" className="zn-sidebar__subitem">
                                    Team List
                                </NavLink>
                            </div>
                        </li>

                        {/* Service Management */}
                        <li>
                            <a
                                className="zn-sidebar__item"
                                data-bs-toggle="collapse"
                                href="#serviceMenu"
                                role="button"
                            >
                                <BsTools />
                                <span className="ms-2">Service Management</span>
                                <BsChevronDown className="ms-auto" />
                            </a>

                            <div className="collapse" id="serviceMenu">
                                <NavLink to="/service" className="zn-sidebar__subitem">
                                    Add Service
                                </NavLink>

                                <NavLink to="/service-list" className="zn-sidebar__subitem">
                                    Service List
                                </NavLink>
                            </div>
                        </li>

                        {/* Portfolio Management */}
                        <li>
                            <a
                                className="zn-sidebar__item"
                                data-bs-toggle="collapse"
                                href="#portfolioMenu"
                                role="button"
                            >
                                <BsFolder />
                                <span className="ms-2">Portfolio Management</span>
                                <BsChevronDown className="ms-auto" />
                            </a>

                            <div className="collapse" id="portfolioMenu">
                                <NavLink to="/portfolio" className="zn-sidebar__subitem">
                                    Add Portfolio
                                </NavLink>

                                <NavLink to="/portfolio-list" className="zn-sidebar__subitem">
                                    Portfolio List
                                </NavLink>
                            </div>
                        </li>

                        {/* Blogs */}
                        <li>
                            <a
                                className="zn-sidebar__item"
                                data-bs-toggle="collapse"
                                href="#BlogMenu"
                                role="button"
                            >
                                <BsFolder />
                                <span className="ms-2">Blog Management</span>
                                <BsChevronDown className="ms-auto" />
                            </a>

                            <div className="collapse" id="BlogMenu">
                                <NavLink to="/blog" className="zn-sidebar__subitem">
                                    Add Blog
                                </NavLink>

                                <NavLink to="/blog-list" className="zn-sidebar__subitem">
                                    Blog List
                                </NavLink>
                            </div>
                        </li>
                         {/* PricePlan */}
                        <li>
                            <a
                                className="zn-sidebar__item"
                                data-bs-toggle="collapse"
                                href="#PricePlanMenu"
                                role="button"
                            >
                                <BsFolder />
                                <span className="ms-2">Price Plan Management</span>
                                <BsChevronDown className="ms-auto" />
                            </a>

                            <div className="collapse" id="PricePlanMenu">
                                <NavLink to="/price-plan" className="zn-sidebar__subitem">
                                    Add Pricing Plan
                                </NavLink>

                                <NavLink to="/price-plan-list" className="zn-sidebar__subitem">
                                    Pricing Plan List
                                </NavLink>
                            </div>
                        </li>
                         {/* PricePlan */}
                        <li>
                            <a
                                className="zn-sidebar__item"
                                data-bs-toggle="collapse"
                                href="#CareerMenu"
                                role="button"
                            >
                                <BsFolder />
                                <span className="ms-2">Career Management</span>
                                <BsChevronDown className="ms-auto" />
                            </a>

                            <div className="collapse" id="CareerMenu">
                                <NavLink to="/career" className="zn-sidebar__subitem">
                                    Add Career
                                </NavLink>

                                <NavLink to="/career-list" className="zn-sidebar__subitem">
                                    Career List
                                </NavLink>
                            </div>
                        </li>
                    </ul>                </div>

               
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