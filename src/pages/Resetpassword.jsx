import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../components/stateprovider';

import React from "react";
import { Link } from "react-router-dom";



const Resetpassword = () => {

    return ( 
        <div className="signin-card">
			<h2>Forgot Your Password</h2>
             <p className='signup-contents'>Enter your email address to get a link to reset your password.</p>
            <form action="#" className='signin-form' onSubmit>

                 <label for="email">Email</label>
                <input type="email" name='email' placeholder='Email' />
                 <ul>
                 <li><button className= 'resetpassword-btn' type='submit'><Link to= '/login' />Cancel</button></li>
                <li><button className= 'resetpassword' type='submit'><Link to= '/login' />Reset</button></li>
                </ul>
            </form>
         <div className="vector">
              <img src="Vector.svg"alt=""></img>
         </div>

        </div>
    );
}

export default Resetpassword;
