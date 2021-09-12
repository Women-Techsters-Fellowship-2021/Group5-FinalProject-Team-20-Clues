import { Switch, Route, Redirect} from 'react-router-dom'
import React, {useState} from 'react'
import Navbar from '../components/layout/navbar';
import Sidebar from '../components/layout/sidebar';
import { routes } from '../routes';
import { PrivateRoutes } from '../routes/PrivateRoutes';

const Portal = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
         setSidebarOpen(true);
    }
    const closeSidebar = () => {
         setSidebarOpen(false);
    }

    return (
        <div className='portal'>
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            {/* main content */}
            <main>
                <div className=''>
                    <Switch>
                        <Route exact path={routes.Portal}>
                            <Redirect to={routes.Dashboard} from={routes.Portal} />
                        </Route>
                        { PrivateRoutes.map((privateRoute, i) => {
                            return <Route exact key={ i } path={ privateRoute.link } component={ privateRoute.component } />
                        }) }
                    </Switch>
                </div>
            </main>
        </div>
    )
}

export default Portal
