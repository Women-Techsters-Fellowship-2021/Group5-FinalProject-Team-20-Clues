import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../components/stateprovider';

import React from "react";
import { Link } from "react-router-dom";



const Login = () => {

    const { register, handleSubmit} = useForm()
    const history = useHistory();

    const login = ({ email, password }) => {
        const user = localStorage.getItem(email)

        if(!user) {
            return alert('An account for this email was not found')
        }

        const userdata = JSON.parse(user)

        if(password !== userdata.password) {
            alert ('email or password is incorrect')
        }
        alert('Login successful')
        history.push('/homepage')
    }


    return ( 
        <div className="signin-card">
			<h2>Welcome to LULL</h2>
             <p className='signup-contents'>Pick up from where you left off.</p>
            <form action="#" className='signin-form' onSubmit={handleSubmit(login)}>

                 <label for="email">Email</label>
                <input type="email" name='email' placeholder='Email'  { ...register('email')} />

                 <label for="password">Password</label>
                <input type="password" name='password' placeholder='Password' { ...register('password')} />
                         <a href="/resetpassword">Forgot Password</a>
                         
                <button className= 'signin-btn' type='submit'><Link to= '/homepage' />Sign In</button>
            </form>
                    
            <div className="signin-alt">
                Don't have an account? <a href="./register"> Create account</a> 
            </div>
        </div>
    );
}

export default Login;
