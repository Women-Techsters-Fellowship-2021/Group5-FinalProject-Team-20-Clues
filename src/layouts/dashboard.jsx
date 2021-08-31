import React, {useState} from 'react'
import Main from '../components/layout/main';
import Navbar from '../components/layout/navbar';
import Sidebar from '../components/layout/sidebar';

const Dashboard = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
         setSidebarOpen(true);
    }
    const closeSidebar = () => {
         setSidebarOpen(false);
    }

    return (
        <div className='dashboard'>
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            <Main />
        </div>
    )
}

export default Dashboard
