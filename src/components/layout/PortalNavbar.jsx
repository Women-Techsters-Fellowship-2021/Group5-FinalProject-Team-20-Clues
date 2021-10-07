import React from 'react'
import { FaBars, FaRegUser, FaSearch } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';
import Dropdown from '../Dropdown';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';


const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <FaBars aria-hidden="true" className='bars'/>
            </div>
            <div className="nav-search">
                <FaSearch  className='search-icon'/>
                <input type="text"  placeholder='Search'/>
            </div>
            
            <div className="navbar__right">
                <div className='nav-notification'>
                    <Dropdown
                        headerTitle={
                            <>
                                <img src="../images/icons/notification.svg" alt="notification" />
                                {/* <img src="../images/icons/bell.svg" alt="notification-image" /> */}
                            </>
                        }
                        dropdownContent={
                            <ul className="dropdown-list">
                                <li className="dropdown-list-item dropdown-options-text">Unread</li>
                                <li className="dropdown-list-item dropdown-options-text">View all</li>
                            </ul>
                        }
                    />
                </div>
                <div className="user-info">
                    <p className='user-name'>Jesutofunmi Adewole</p>
                    <h6 className='user-role'>User</h6>
                </div>
                <div className='nav-avatar'>
                    <Dropdown
                        headerTitle={
                            <img src='../images/dashboard/avatar.png' alt="avatar" />
                        }
                        dropdownContent={
                            <ul className="dropdown-list">
                                <Link to={routes.Settings} >
                                    <li className="dropdown-list-item dropdown-options-text">
                                        <FaRegUser className='dropdown-options-icon'/> Edit profile
                                    </li>
                                </Link>
                                <Link to={routes.Settings} >
                                    <li className="dropdown-list-item dropdown-options-text">
                                        <IoSettingsOutline className='dropdown-options-icon'/> Account Settings
                                    </li>
                                </Link>

                                <Link to={routes.Login} >
                                    <li className="dropdown-list-item dropdown-options-text dropdown-red">
                                        <AiOutlineLogout className='dropdown-options-icon'/> Logout
                                    </li>
                                </Link>
                                
                            </ul>
                        }
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
