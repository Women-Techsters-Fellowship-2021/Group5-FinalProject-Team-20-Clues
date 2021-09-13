
import React from "react";
import { Link } from "react-router-dom";



const Login = () => {


    return (  
        <div className="sign-in">
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
                         <a href="/resetpassword">Forgot Password</a>
                  </div> 
                <button className= 'signin-btn' type='submit'><Link to= '/homepage' />Sign In</button>
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
