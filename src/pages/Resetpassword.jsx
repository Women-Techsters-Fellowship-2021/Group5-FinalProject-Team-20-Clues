
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";



const Resetpassword = () => {

      const [email, setEmail] = useState("");
      const history = useHistory();

      const validateForm = () => {
          return email.length > 0;
      };


      const handleSubmit = (event) => {
          event.preventDefault();
      };

    return ( 
            <div className="sign-in">
            <div>
                <img src="./images/password.svg" alt="" />
            </div>

        <div className="signin-card">
			<h2>Forgot Your Password</h2>
             <p className='signup-contents'>Enter your email address to get a link to reset your password.</p>
            <form action="#" className='signin-form' onSubmit>
                 <div>
                 <label for="email">Email</label>
                 <input type="email" name='email' placeholder='Email'value={email} onChange />
                 </div>
             <div>
                 <ul>
                 <li><button className= 'resetpassword-btn' type='submit'><Link to= '/login' />Cancel</button></li>
                <li><button className= 'resetpassword' type='submit'><Link to= '/login' />Reset</button></li>
                </ul>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Resetpassword;
