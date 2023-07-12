import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";
import ArrowDownIcon from "../../assets/images/icon-arrow-down.svg";
import ArrowUpIcon from "../../assets/images/icon-arrow-up.svg";
import TodoIcon from "../../assets/images/icon-todo.svg";
import CalendarIcon from "../../assets/images/icon-calendar.svg";
import RemindersIcon from "../../assets/images/icon-reminders.svg";
import PlanningIcon from "../../assets/images/icon-planning.svg";
import MenuIcon from "../../assets/images/icon-menu.svg";

const Navbar = ({ handleToggleSidebar }) => {

    return (
        <div className='navbar'>
            <div className='navbar-title'>
                <h1>snap</h1>
            </div>
            <div className='navbar-menu'>
                <div className='navbar-menu-link'>

                    <button>
                        Features
                        <img className='arrowUp' src={ArrowUpIcon} alt="" />
                        <img className='arrowDown' src={ArrowDownIcon} alt="" />
                    </button>
                    <ul className="dropdown-menu">
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
                <div className='navbar-menu-link'>
                    <button>
                        Company
                        <img className='arrowUp' src={ArrowUpIcon} alt="" />
                        <img className='arrowDown' src={ArrowDownIcon} alt="" />
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <NavLink to="/" className="link">
                                History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="link">
                                Our Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="link">
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='navbar-menu-link'>
                    <button>Careers</button>
                </div>
                <div className='navbar-menu-link'>
                    <button>About</button>
                </div>
            </div>
            <div className='navbar-login'>
                <NavLink to="/">
                    Login
                </NavLink>
                <NavLink to="/" className="register-link">
                    Register
                </NavLink>
            </div>
            <div className='navbar-burger'>
                <button onClick={handleToggleSidebar}>
                    <img src={MenuIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;