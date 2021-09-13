
import '../styles/register.css';
import React from 'react'



const Register = () => {
   

    return (  
        <div className="sign-up">
            <div className="reg-left">
            </div> 
            <div className="reg-right">
                
            <div className="signup-card">
                <h2>Welcome to LULL</h2>
                <p className='signup-contents'>Create your account to get started</p>
                
                <form action="#" className='signup-form' onSubmit >
                    <div>   
                    <input type="text" id="fullname" name="firstname" placeholder='Full Name'/> 
                    </div>

                   <div>
                    <input type="email" name='email' id='email' placeholder='Email'/>
                   </div>

                    <div>
                    <input type="password" name='password' id='password' placeholder='Password'/>
                    </div>
                
                    <button className= 'signup-btn' type='submit'>Sign Up</button>
                </form>

                <div className="signup-alt">
                    Already have an account? <a href="/login"> Login</a> 
                </div>
            </div>
            </div>

        </div>
    );
}

export default Register
