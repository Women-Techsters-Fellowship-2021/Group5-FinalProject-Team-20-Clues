// import { useState } from 'react';


const Accountsettings = () => {

    return (
    <div className="account-setting">
           <p>Profile Picture</p>
      <div className="profile-tab">
   
      <a href>
              <img width="50" src='../images/dashboard/avatar.png' alt="avatar" />
          </a>
          <button className="upload-img">Upload New </button>
          <button className="remove-img">Remove profile picture</button>
      </div>
      <div className="horizontal-line"></div>

      <form action="" className="register-form">

          <div className="register-grid">
       
          <div className="register-flex">
              <label htmlFor="subject">Full Name</label>
              <input className="register-input" type="text" placeholder="Jesutfumi Adewole" value="" />
              </div>
          

             
              <div className="register-flex">
              <label htmlFor="email">Email Address</label>
              <input className="register-input" type="email" placeholder="rabomefavour2@gmail.com" name="" id="" />
              </div>
          
          </div>

          <div className="register-grid">
       
          <div className="register-flex">
              <label htmlFor="subject">User Name</label>
              <input className="register-input" type="text" placeholder="Joel21" value="" />
              </div>
          

             
              <div className="register-flex">
              <label htmlFor="number">Phone Number</label>
              <input className="register-input" type="tel" placeholder="8122138029" name="" id="" />
              </div>
          
          </div>
          <div className="register-textarea">
          <label htmlFor="message">Bio</label>
          <textarea className="register-msg"  placeholder="Final year student, university of Lagos" id="" cols="70" rows="5"></textarea>
          </div>
         
          <button className="profile-btn"> update profile</button>
      </form>  
   
    
  </div>
    )
}

export default Accountsettings;
