import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { FaRegCalendarAlt, FaRegCalendarTimes, FaRegEnvelope, FaTimes } from 'react-icons/fa';

const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src='images/dashboard/doctor.png' alt="logo" />
                    <h1>Logo</h1>
                </div>
                <FaTimes 
                    onClick={() => closeSidebar()}
                    aria-hidden="true"
                    className='times'
                    id="sidebarIcon"
                />
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__items">
                    <a href="#" className="sidebar__link">
                        <MdDashboard  className='sidebar-menu-icon'/>
                        Dashboard
                    </a>
                </div>
                <div className="sidebar__items">
                    <a href="#" className="sidebar__link"> 
                        <FaRegCalendarAlt className='sidebar-menu-icon' />
                        Schedule
                    </a>
                </div>
                <div className="sidebar__items">
                    <a href="#" className="sidebar__link">
                        <FaRegEnvelope className='sidebar-menu-icon'/> 
                        Message
                    </a>
                </div>
                <div className="sidebar__items">
                    <a href="#" className="sidebar__link">
                        <FaRegCalendarTimes className='sidebar-menu-icon'/> 
                        Programs
                    </a>
                </div>
                <div className="sidebar__items">
                    <a href="#" className="sidebar__link"> 
                        <IoSettingsOutline className='sidebar-menu-icon'/>
                        Settings
                    </a>
                </div>
                <div className="sidebar__logout">
                    <a href="#" className="sidebar__link"> 
                        <FiLogOut className='sidebar-menu-icon'/>
                        Log out
                    </a>
                </div>               
            </div>
        </div>
    )
}

export default Sidebar
