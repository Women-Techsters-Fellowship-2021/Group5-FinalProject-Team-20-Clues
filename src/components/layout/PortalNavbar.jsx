import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa';


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
                    <img src="../images/icons/notification.svg" alt="notification" />
                </div>
                {/* <img src="../images/icons/bell.svg" alt="notification-image" /> */}
                <div className="user-info">
                    <p className='user-name'>Jesutofunmi Adewole</p>
                    <h6 className='user-role'>User</h6>
                </div>
                <div className='nav-avatar'>
                    <img src='../images/dashboard/avatar.png' alt="avatar" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
