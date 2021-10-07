import React from 'react';
import '../styles/component/Securitylogin.css';

const Notificationsettings = () => {
    return (
        <div>
        
        <div className="notification">
            <h5>Notification: ON </h5>
            <i class="fas fa-toggle-on fa-lg"></i>
            <p>If you wish to stop all notifications, turn this off</p>
            
          </div>

          <div className="msg-notification">
            <div className="notifs">
            <h5>Messages: ON <i class="fas fa-toggle-on fa-lg"></i></h5>
              <p>Please select the notification type</p>
              <h6><input type="checkbox" name="" id="" /> Show a notification</h6>
              <h6><input type="checkbox" name="" id="" /> Play a sound</h6>              
            </div>

            <div className="notifs">
            <h5>Calls: ON <i class="fas fa-toggle-on fa-lg"></i></h5>
              <p>Please select the notification type</p>
              <h6><input type="checkbox" name="" id="" /> Show a notification</h6>
              <h6><input type="checkbox" name="" id="" /> Play a sound</h6>              
            </div>
          </div>

          <div className="msg-notification">
            <div className="notifs">
            <h5>Appointment: ON <i class="fas fa-toggle-on fa-lg"></i></h5>
              <p>Please select the notification type</p>
              <h6><input type="checkbox" name="" id="" /> Show a notification</h6>
              <h6><input type="checkbox" name="" id="" /> Play a sound</h6>              
            </div>

            <div className="notifs">
            <h5>Blog: ON  <i class="fas fa-toggle-on fa-lg"></i></h5>
              <p>Please select the notification type</p>
              <h6><input type="checkbox" name="" id="" /> Show a notification</h6>
              <h6><input type="checkbox" name="" id="" /> Play a sound</h6>              
            </div>
          </div>

          <div className="email-notification">
            <h5>Email Notification: ON </h5>
            <i class="fas fa-toggle-on fa-lg"></i>
            <p>If you wish to stop all notifications, turn this off</p>
            
          </div>

          <button className="save-changes"> Save Changes</button>

        </div>
    )
}

export default Notificationsettings;
