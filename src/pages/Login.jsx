
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
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
        <div className="sign-in">
            <div>
                <img src="./images/main.svg" alt="resetpassword" />
            </div>

            <div className="signin-card">
                <h2>Welcome to LULL</h2>
                <p className='signup-contents'>Create your account to get started</p>

            <form action="#" className='signin-form' onSubmit={handleSubmit(login)}>
                 <div>
                 <label for="email">Email</label>
                 <input type="email" name='email' placeholder='Email'  { ...register('email')} />
                  </div>

                  <div>
                 <label for="password">Password</label>
                 <input type="password" name='password' placeholder='Password' { ...register('password')} />
                         <a href="/resetpassword">Forgot Password</a>
                  </div> 
                <button className= 'signin-btn' type='submit'><Link to= '/homepage' />Sign In</button>
            </form>
                    
            <div className="signin-alt">
                Don't have an account? <a href="./register"> Create account</a> 
            </div>
        </div>
     </div>
    );
}

export default Login;
