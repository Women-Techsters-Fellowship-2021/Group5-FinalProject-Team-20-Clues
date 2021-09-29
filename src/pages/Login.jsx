import React from "react";
import { Link, NavLink,} from "react-router-dom";
import { routes } from "../routes";
import { useForm } from "react-hook-form";
// import { useHistory } from 'react-router-dom';


const Login = () => {

    const { register, handleSubmit} = useForm()
    // const history = useHistory();

    const login = ({ email, password }) => {
        const user = localStorage.getItem(email)

        if(!user) {
            return alert('An account for this email was not found')
        }

        const userdata = (user)

        if(password !== userdata.password) {
            alert ('email or password is incorrect')
        }
        alert('Login successful')
        // history.push('/homepage')
    }


    return (  
        <div className="auth">
            <div className="reg-left">
        </div>
        <div className="reg-right">
            <div className="signin-card auth-cont">
                <div className="auth__logo">
                    <img src="../images/icons/lull-logo.svg" alt="brand-logo" />
                </div>
                <h2>Welcome to LULL</h2>
                <p className='signup-contents'>Pick up from where you left off.</p>

            <form action="#" className='signin-form' onSubmit={handleSubmit(login)}>
                <div>
                    <input type="email" name='email' placeholder='Email'required { ...register('email')} />
                </div>

                <div>
                    <input type="password" name='password' placeholder='Password'required { ...register('password')}/>
                </div> 
                <NavLink to={routes.ResetPassword}> Forgot Password</NavLink>
                <button className= 'signin-btn' type='submit'>Sign In</button>
            </form>
                    
            <div className="signin-alt">
                Don't have an account? <Link to={routes.Register}> Create account</Link> 
            </div>
        </div>
        </div>
     </div>
    );
}

export default Login;
