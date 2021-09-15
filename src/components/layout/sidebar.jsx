import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaRegCalendarAlt, FaRegCalendarTimes, FaRegEnvelope, FaTimes } from 'react-icons/fa';
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";

const Sidebar = ({sidebarOpen, closeSidebar}) => {

    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <FaTimes 
                onClick={() => closeSidebar()}
                aria-hidden="true"
                className='times close-icon'
                id="sidebarIcon"
            />
            <div className="sidebar__logo">
                <img src="../images/icons/brand-logo.svg" alt="brand-logo" />
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__items">
                    <NavLink to={routes.Dashboard} className="sidebar__link" activeClassName='active'>
                        <MdDashboard  className='sidebar-menu-icon'/>
                        Dashboard
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.Therapist} className="sidebar__link" activeClassName='active'>
                        <HiOutlineUsers className='sidebar-menu-icon'/> 
                        Therapists
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.Schedule} className="sidebar__link" activeClassName='active'>
                        <FaRegCalendarAlt className='sidebar-menu-icon' />
                        Schedule
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.Message} className="sidebar__link" activeClassName='active'>
                        <FaRegEnvelope className='sidebar-menu-icon'/> 
                        Message
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.Programs} className="sidebar__link" activeClassName='active'>
                        <FaRegCalendarTimes className='sidebar-menu-icon'/> 
                        Programs
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.Settings} className="sidebar__link" activeClassName='active'>
                        <IoSettingsOutline className='sidebar-menu-icon'/>
                        Settings
                    </NavLink>
                </div>  
                <div className="sidebar__items">
                    <NavLink to={routes.MyStory} className="sidebar__link" activeClassName='active'>
                        <HiOutlineUsers className='sidebar-menu-icon'/> 
                        My Story
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.LogOut} className="sidebar__link" activeClassName='active'>
                        <FiLogOut className='sidebar-menu-icon'/>
                        Log out
                    </NavLink>
                </div>       
            </div>
        </div>
    )
}

export default Sidebar