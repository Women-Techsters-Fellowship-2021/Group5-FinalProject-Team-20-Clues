
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// import styles
import '../styles/register.css';
import React from 'react'




const Register = () => {
    const { register, handleSubmit, errors} = useForm();
    const history = useHistory();

    const registerUser = ({ email, password, confirmPassword,}) => {

        if (!email) {
            alert("Email required");
        } 

        if(!password) {
            alert("Password is required");
        }
        
        if(password !== confirmPassword) {
            alert("Password is required");
        } 

        let userExist = localStorage.getItem(email)

        if (userExist) {
            return alert ('This user has already been registered')
        } alert('Registered Successfully')
            history.push('/homepage')

        const newUser = JSON.stringify({
            email: email, 
            password: password
        })

        localStorage.setItem(email, newUser)
    }

    
    const isEmailValid = (email) => {
        if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            return false;
        } else {
            return true;
        }
    }
    
    const isPasswordValid =  (password) => {
        if(password.length < 8) {
            return false;
        } else {
            return true;
        }
    }

    return (  
        <div className="sign-up">
            <div>
                <img src="./images/main.svg" alt="resetpassword" />
            </div> 
            <div className="signup-card">
                <h2>Welcome to LULL</h2>
                <p className='signup-contents'>Create your account to get started</p>
                
                <form action="#" className='signup-form' onSubmit={handleSubmit(registerUser)}>
                    <div>   
                      <label for="fullname">Name</label>
                    <input type="text" id="fullname" name="firstname" placeholder='Full Name' { ...register('fullname', { required: true}) } />
                    {/* {errors.fullname && <p>Fullname required</p>} */}   
                    </div>

                   <div>
                    <label for="email">Email</label>
                    <input type="email" name='email' id='email' placeholder='Email' { ...register('email', { required: true, validate: isEmailValid})} />
                    {/* {errors.email && <p>{errors.email}</p>} */}
                   </div>

                    <div>
                    <label for="password">Password</label>
                    <input type="password" name='password' id='password' placeholder='Password' { ...register('password', { required: true, validate: isPasswordValid})}   />
                    {/* {errors.password && <p>{errors.password}</p>} */}
                    </div>
                
                    <button className= 'signup-btn' type='submit'>Sign Up</button>
                </form>

                <div className="signup-alt">
                    Already have an account? <a href="/login"> Login</a> 
                </div>
            </div>
        </div>
    );
}

export default Register
