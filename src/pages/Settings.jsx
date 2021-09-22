import { useState } from 'react';
import '../styles/component/Settings.css';

import Accountsettings from '../components/Accountsettings';
import Securitylogin from '../components/Securitylogin';
import Notificationsettings from '../components/Notificationsettings';

const Settings = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
        <div className="tabs-container">

        <div className="block-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Account Settings
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Login & Security
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Notification Settings
        </button>
      </div>

            <div className="content-tabs">

        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <Accountsettings />
        </div>


        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
             <Securitylogin />
        </div>


        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         <Notificationsettings />
        </div>
        
            </div>
        </div>
    )
}

export default Settings