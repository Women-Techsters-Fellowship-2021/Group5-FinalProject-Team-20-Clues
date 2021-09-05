import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaRegCalendarAlt, FaRegCalendarTimes, FaRegEnvelope, FaTimes } from 'react-icons/fa';

const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <FaTimes 
                onClick={() => closeSidebar()}
                aria-hidden="true"
                className='times close-icon'
                id="sidebarIcon"
        />
    
            <div className="sidebar__title">
                <h1>Logo</h1>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__items">
                    <a href="#dashboard" className="sidebar__link">
                        <MdDashboard  className='sidebar-menu-icon'/>
                        Dashboard
                    </a>
                </div>
                <div className="sidebar__items">
                    <a href="#schedule" className="sidebar__link"> 
                        <FaRegCalendarAlt className='sidebar-menu-icon' />
                        Schedule
                    </a>
                </div>
                <div className="sidebar__items">
                    <a href="message" className="sidebar__link">
                        <FaRegEnvelope className='sidebar-menu-icon'/> 
                        Message
                    </a>
                </div>
                <div className="sidebar__items">
                    <a href="#programs" className="sidebar__link">
                        <FaRegCalendarTimes className='sidebar-menu-icon'/> 
                        Programs
                    </a>
                </div>
                <div className="sidebar__items">
                    <a href="therapist" className="sidebar__link"> <HiOutlineUsers className='sidebar-menu-icon'/> 
                        Therapists
                    </a>
                </div>
                <div className="sidebar__items">
                    <a href="#story" className="sidebar__link">
                        <HiOutlineUsers className='sidebar-menu-icon'/> 
                        My Story
                    </a>
                </div>
                <div className="sidebar__items">
                    <a href="#ettings" className="sidebar__link"> 
                        <IoSettingsOutline className='sidebar-menu-icon'/>
                        Settings
                    </a>
                </div>
                <div className="sidebar__logout">
                    <a href="#logOut" className="sidebar__link"> 
                        <FiLogOut className='sidebar-menu-icon'/>
                        Log out
                    </a>
                </div>               
            </div>
        </div>
    )
}

export default Sidebar
