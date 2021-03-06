import '../styles/register.css';
import React, { useContext} from 'react';
import { routes } from '../routes';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../components/stateprovider';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Register = () => {
	const { register, handleSubmit } = useForm(
        { reValidateMode: 'onSubmit'})

    const history = useHistory();
	const context = useContext(AppContext);
	
   const registerUser = ({ email, password, firstname, usercategory}) => {

//         if (!email) {
//             alert("Email required");
//         } 

//         if(!password) {
//             alert("Password is required");
//         }
        
//         if(password !== confirmPassword) {
//             alert("Password is required");
//         } 

//         let userExist = localStorage.getItem(email)

//         if (userExist) {
//             return alert ('This user has already been registered')
//         } alert('Registered Successfully')
            // history.push('/patients')

    // }

//     const isEmailValid = (email) => {
//         if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
//             return false;
//         } else {
//             return true;
//         }
//     }
    
//     const isPasswordValid =  (password) => {
//         if(password.length < 8) {
//             return false;
//         } else {
//             return true;
//         }
//     }

       const newUser = {
             email: email,
             password: password,
             firstname: firstname,
             usercategory: usercategory
     };

     axios.post('https://localhost:44377/api/v1/Auth',
         newUser)
         .then(result => {
             console.log(result);
             if (result.request.status===201) {
                  console.log(result.request.status)
                 alert("user registration succesfully")
                   history.push('/login')
                   
             }
         })
        //  const newEmail = {
            //  toEmail: newUser.email,
        //      subject: "Lull Registration Notification",
        //      body: "Dear " + newUser.email + ". Thank you for completing your registration"
        //  }
        }
   
    return (  
        <div className="auth">
            <div className="reg-left"></div> 
            <div className="reg-right">
                
                <div className="auth-cont">
                    <div className="auth__logo">
                        <img src="../images/icons/lull-logo.svg" alt="brand-logo" />
                    </div>
                    <h2>Welcome to LULL</h2>
                    <p className='signup-contents'>Create your account to get started</p>
                    
                    <form action="#" className='signup-form'onSubmit={handleSubmit(registerUser)}>
                        <div>
                            <label htmlFor="">Register as:</label>
                            <select name="category" id="category" className="sel-ctn" 
                             required { ...register('usercategory', { required: true}) } > 

                                <option value="choose on">Choose one</option>
                                <option value="patient">Patient</option>
                                <option value="doctor">Doctor</option>
                                
                            </select>
                        </div>
                        <br />
                        <div> 
                           <input type="text" className="effect" name='firstname' id='firstname' placeholder='First Name'required { ...register('firstname', { required: true}) } />
                           <span classame="focus-border"></span>
                        </div>
                        <div>
                            <input type="email" name='email' id='email' placeholder='Email'required { ...register('email', { required: true})} /> 
                        </div>

                        <div>
                           <input type="password" name='password' id='password' placeholder='Password' required { ...register('password', { required: true })}   />
                        </div>              
                        <div className="btn-ctn">
                            <button className= 'signup-btn' type='submit'>Sign Up</button>
                        </div>
                    </form>
                    <div className="signup-alt">
                        Already have an account? <Link to={routes.Login}> Login</Link> 
                    </div>
                </div>
            </div>
        </div>
    );
  }


export default Register
