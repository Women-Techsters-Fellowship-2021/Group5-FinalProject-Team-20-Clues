import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppContext } from '../components/stateprovider';
// import styles
import '../styles/register.css';

import React from 'react'
// import { useHistory } from 'react-router-dom';
// import { useForm } from 'react-hook-form';


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
            <div className="signup-card">
                <h2>Welcome</h2>
				<h3>LULL</h3>
                <p className='signup-contents'>Let's create your account!</p>
                
                <form action="#" className='signup-form' onSubmit={handleSubmit(registerUser)}>
                    <input type="text" name='fullname' id='fullname' placeholder='Full Name' { ...register('fullname', { required: true}) } />
                    {/* {errors.fullname && <p>Fullname required</p>} */}

                    <input type="email" name='email' id='email' placeholder='Email' { ...register('email', { required: true, validate: isEmailValid})} />
                    {/* {errors.email && <p>{errors.email}</p>} */}

                    <input type="password" name='password' id='password' placeholder='Password' { ...register('password', { required: true, validate: isPasswordValid})}   />
                    {/* {errors.password && <p>{errors.password}</p>} */}

                    <input type="password" name='confirmpassword' id='confirmpassword' placeholder='Confirm Password' { ...register('confirmPassword', { required: true})}/>
                    {/* {errors.confirmPassword && <p>{errors.confirmpassword}</p>} */}

            
                    <button className= 'signup-btn' type='submit'>Sign Up</button>
                </form>

                <div className="signup-alt">
                    Already have an account? <a href="/login"> Sign In</a> 
                </div>
            </div>
        </div>
    );
}

export default Register
