import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaRegCalendarAlt, FaRegCalendarTimes, FaRegEnvelope, FaTimes } from 'react-icons/fa';
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";

const Sidebar = ({sidebarOpen, closeSidebar}) => {

    // const navList = [
    //     {
    //         name: 'Dashboard',
    //         'icon': MdDashboard,
    //         routeLink: routes.Dashboard
    //     },
    //     {
    //         name: 'Therapists',
    //         icon: '',
    //         routeLink: routes.Therapist
    //     },
    //     {
    //         name: 'Schedule',
    //         'icon': MdDashboard,
    //         routeLink: routes.Schedule
    //     },
    //     {
    //         name: 'Message',
    //         'icon': MdDashboard,
    //         routeLink: routes.Message
    //     },
    //     {
    //         name: 'Programs',
    //         'icon': MdDashboard,
    //         routeLink: routes.Programs
    //     },
    //     {
    //         name: 'My Story',
    //         icon: '',
    //         routeLink: routes.MyStory
    //     },
    //     {
    //         name: 'Settings',
    //         icon: '',
    //         routeLink: routes.Settings
    //     }
    // ]

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
                {/* <ul>
                    {navList.map((navItem, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={navItem.routeLink} className='sidebar__items'>
                                    <span href="#dashboard" className="sidebar__link">
                                        <i className='sidebar-menu-ico'>{`${navItem.icon}`}</i>
                                        {navItem.name}
                                        {navItem.icon}
                                    </span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul> */}
                <div className="sidebar__items">
                    <NavLink to={routes.Dashboard} className="sidebar__link">
                        <MdDashboard  className='sidebar-menu-icon'/>
                        Dashboard
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.Therapist} className="sidebar__link">
                        <HiOutlineUsers className='sidebar-menu-icon'/> 
                        Therapists
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.Schedule} className="sidebar__link">
                        <FaRegCalendarAlt className='sidebar-menu-icon' />
                        Schedule
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.Message} className="sidebar__link">
                        <FaRegEnvelope className='sidebar-menu-icon'/> 
                        Message
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.Programs} className="sidebar__link">
                        <FaRegCalendarTimes className='sidebar-menu-icon'/> 
                        Programs
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.Settings} className="sidebar__link">
                        <IoSettingsOutline className='sidebar-menu-icon'/>
                        Settings
                    </NavLink>
                </div>  
                <div className="sidebar__items">
                    <NavLink to={routes.MyStory} className="sidebar__link">
                        <HiOutlineUsers className='sidebar-menu-icon'/> 
                        My Story
                    </NavLink>
                </div>
                <div className="sidebar__items">
                    <NavLink to={routes.LogOut} className="sidebar__link">
                        <FiLogOut className='sidebar-menu-icon'/>
                        Log out
                    </NavLink>
                </div>       
            </div>
        </div>
    )
}

export default Sidebar