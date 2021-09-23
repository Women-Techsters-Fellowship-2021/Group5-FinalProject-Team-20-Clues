import React from 'react';
import '../styles/component/Securitylogin.css';

const Securitylogin = () => {
    return (
        <>
        <div className="allowed-attempts">
          <h5>Allowed login attempts</h5>
          <input type="" placeholder="3" />
          <p>Accounts will be blocked for sometime after provided number of incorrect attempts</p>
        </div>

        <h5 className="password-req">Password requirements</h5>

        <div className="password-requirement">

          <div className="password-length">
            <h5>Minimum password length</h5>
            <input type="" placeholder="8" />
            <p>Minimum number of characters used in the password</p>
          </div>

          <div className="uppercase">
            <h5> Password must contain an uppercase character</h5>
            <i class="fas fa-toggle-on fa-lg"></i>
            <p>If enabled, provided passwords must contain at least one uppercase </p>
            
          </div>

          <div className="number">
            <h5> Password must contain a number</h5>
            <i class="fas fa-toggle-on fa-lg"></i>
            <p>If enabled, provided passwords must contain at least one digit </p>
            
          </div>

        </div>
        <button className="save-changes"> Save Changes</button>
        </>
    )
}

export default Securitylogin
