
import '../styles/register.css';
import React, { useContext} from 'react'
import { routes } from '../routes';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../components/stateprovider';
// import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Register = () => {
	const { register, handleSubmit } = useForm(
        { reValidateMode: 'onSubmit'})

    const history = useHistory();
	const context = useContext(AppContext);
	

	// function registerUser({ email, password, confirmPassword })


// const Register = () => {
//     const { register, handleSubmit } = useForm();
//     // const history = useHistory();

   const registerUser = ({ email, password, confirmPassword,}) => {

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
//             // history.push('/homepage')

//     }

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
             confirmPassword: confirmPassword,
     };

     axios.post('https://localhost:44377/api/v1/Auth',
         newUser)
         .then(result => {
             console.log(result);
             if (result.data.success) {
                //  toast.success(result.data.massage);
                 context.dispatch({
                     type: 'REGISTER',
                     payload: {
                         userId: result.data.data.id,
                         userEmail: result.data.data.email,
                     },
                 })
             }
         })
         const newEmail = {
             toEmail: newUser.email,
             subject: "Lull Registration Notification",
             body: "Dear " + newUser.email + ". Thank you for completing your registration"
         }
   
   
    return (  
        <div className="auth">
            <div className="reg-left">
            </div> 
            <div className="reg-right">
                <div className="signup-card">
                    <div className="auth__logo">
                        <img src="../images/icons/lull-logo.svg" alt="brand-logo" />
                    </div>
                    <h2>Welcome to LULL</h2>
                    <p className='signup-contents'>Create your account to get started</p>
                    
                    <form action="#" className='signup-form'onSubmit={handleSubmit(registerUser)}>
                        <div>
                            <label for="">Register as:</label>
                            <select name="category" id="category"> 
                                <option value="choose on">Choose one</option>
                                <option value="patient">Patient</option>
                                <option value="doctor">Doctor</option>
                            </select>
                        </div>
                        <div>   
                           <input type="text" name='fullname' id='fullname' placeholder='Full Name'required { ...register('fullname', { required: true}) } />
                        </div>
                        <div>
                            <input type="email" name='email' id='email' placeholder='Email'required { ...register('email', { required: true})} /> 
                        </div>

                        <div>
                           <input type="password" name='password' id='password' placeholder='Password' required { ...register('password', { required: true })}   />
                        </div>              
                        <button className= 'signup-btn' type='submit'>Sign Up</button>
                    </form>

                    <div className="signup-alt">
                        Already have an account? <Link to={routes.Login}> Login</Link> 
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default Register
