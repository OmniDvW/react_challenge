import React from 'react';
import { NavLink } from 'react-router-dom';
import "./MobileNavbar.scss";
import ArrowUpIcon from "../../assets/images/icon-arrow-up.svg";
import TodoIcon from "../../assets/images/icon-todo.svg";
import CalendarIcon from "../../assets/images/icon-calendar.svg";
import RemindersIcon from "../../assets/images/icon-reminders.svg";
import PlanningIcon from "../../assets/images/icon-planning.svg";
import CloseIcon from "../../assets/images/icon-close-menu.svg";

const MobileNavbar = ({ isOpen, handleToggleSidebar }) => {

    return (
        <div className={`mobile-navbar ${isOpen ? 'open' : 'closed'}`}>
            <div className='mobile-navbar-close'>
                <button onClick={handleToggleSidebar}>
                    <img src={CloseIcon} alt="" />
                </button>
            </div>
            <div className='mobile-navbar-menu'>
                <div className='mobile-navbar-menu-link'>
                    <span>
                        Features
                        <img src={ArrowUpIcon} alt="" />
                    </span>
                    <ul className="mobile-dropdown-menu">
                        <li>
                            <div className='logo-img'>
                                <img src={TodoIcon} alt="" />
                            </div>
                            <NavLink to="/">
                                Todo List
                            </NavLink>
                        </li>
                        <li>
                            <div className='logo-img'>
                                <img src={CalendarIcon} alt="" />
                            </div>
                            <NavLink to="/">
                                Calendar
                            </NavLink>
                        </li>
                        <li>
                            <div className='logo-img'>
                                <img src={RemindersIcon} alt="" />
                            </div>
                            <NavLink to="/">
                                Reminders
                            </NavLink>
                        </li>
                        <li>
                            <div className='logo-img'>
                                <img src={PlanningIcon} alt="" />
                            </div>
                            <NavLink to="/">
                                Planning
                            </NavLink>
                        </li>
                    </ul>



                </div>
                <div className='mobile-navbar-menu-link'>
                    <span>
                        Company
                        <img src={ArrowUpIcon} alt="" />
                    </span>
                    <ul className="mobile-dropdown-menu">
                        <li>
                            <NavLink to="/">
                                History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                Our Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>


                <div className='mobile-navbar-menu-link'>
                    <span>
                        Careers
                    </span>
                </div>
                <div className='mobile-navbar-menu-link'>
                    <span to="/">
                        About
                    </span>
                </div>
            </div>
            <div className='mobile-navbar-login'>
                <NavLink to="/">
                    Login
                </NavLink>
                <NavLink to="/" className="mobile-register-link">
                    Register
                </NavLink>
            </div>
        </div>
    );
};

export default MobileNavbar;