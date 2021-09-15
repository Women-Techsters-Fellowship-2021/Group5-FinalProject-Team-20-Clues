
import '../styles/register.css';
import React from 'react'



const Register = () => {
   

    return (  
        <div className="auth">
            <div className="reg-left">
            </div> 
            <div className="reg-right">
                
            <div className="signup-card">
                <h2>Welcome to LULL</h2>
                <p className='signup-contents'>Create your account to get started</p>
                
                <form action="#" className='signup-form' onSubmit >

               <div>
               <label for="">Register as:</label>
              <select name="category" id="category"> 
                 <option value="choose on">Choose one</option>
                   <option value="patient">Patient</option>
                   <option value="doctor">Doctor</option>
                   </select>
               </div>
               <br />

                    <div>   
                    <input type="text" id="fullname" name="firstname" placeholder='Full Name'/> 
                    </div>
                         <input type="date" id="birthday" name="birthday" placeholder= 'Date of Birth'/>
                   <div>
                    <input type="email" name='email' id='email' placeholder='Email'/>  
                   </div>

                    <div>
                    <input type="password" name='password' id='password' placeholder='Password'/>
                    </div>
             <textarea rows="4" cols="40" name="comment" form="usrform">Enter your Address here...</textarea>               
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
