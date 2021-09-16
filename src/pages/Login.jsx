import React from "react";
import { NavLink, useHistory} from "react-router-dom";
import { routes } from "../routes";



const Login = () => {
    const history = useHistory();

    return (  
        <div className="auth">
            <div className="reg-left">
        </div>
        <div className="reg-right">
            <div className="signin-card">

                <h2>Welcome to LULL</h2>
                <p className='signup-contents'>Pick up from where you left off.</p>

            <form action="#" className='signin-form' onSubmit>
                <div>
                    <input type="email" name='email' placeholder='Email'/>
                </div>

                <div>
                    <input type="password" name='password' placeholder='Password'/>
                </div> 
                <NavLink to={routes.ResetPassword}> Forgot Password</NavLink>
                <button className= 'signin-btn' type='submit' onClick={()=> history.push(routes.Portal)}>Sign In</button>
            </form>
                    
            <div className="signin-alt">
                Don't have an account? <a href="./register"> Create account</a> 
            </div>
        </div>
        </div>
     </div>
    );
}

export default Login;
