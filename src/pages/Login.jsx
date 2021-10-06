import React, { useContext} from 'react';
import { Link, NavLink,} from "react-router-dom";
import { routes } from "../routes";
import { useForm } from "react-hook-form";
import { AppContext } from '../components/stateprovider';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

     function Login(){
          const { register, handleSubmit} = useForm();
          const history = useHistory();
          const context = useContext(AppContext);


         const loginUser = ({email, password, firstname }) => {

             let userlogin = {
                 email: email,
                 password: password,
                 firstname: firstname
           }

    //    const login = () => {
        // const user = localStorage.getItem(email)

        // if(!user) {
        //     return alert('An account for this email was not found')
        // }

        // const userdata = (user)

        // if(password !== userdata.password) {
        //     alert ('email or password is incorrect')
        // }
        // alert('Login successful')
        // history.push('/patients')
    // }

      
  axios.post('https://localhost:44377/api/v1/Auth/login',
          userlogin)
         .then(result => {
               console.log(result);
             if (result.request.status===201) {
                  console.log(result.request.status)
                 alert("Welcome to Lull")
                    // console.log("Welcome" +  result.data.firstname)
                       context.setState({
                            isLoggedIn: true,
	                        userId:  result.data.id,
	                        userEmail: result.data.email,   
                       }
                 )}
                      console.log(context.state)
                      localStorage.setItem("userInformation", JSON.stringify({
                            isLoggedIn: true,
	                        userId:  result.data.id,
	                        userEmail: result.data.email, 
                            firstName: result.data.firstname,
                             
                       }));
                        history.push('/patients/Dashboard')
             });


        //      if (result.data.success) {
        //         //  toast.success(result.data.massage);
        //          context.dispatch({
        //              type: 'REGISTER',
        //              payload: {
        //                  userId: result.data.data.id,
        //                  userEmail: result.data.data.email,
        //              },
        //          })
        //      }
        //  })
        //  const newEmail = {
            //  toEmail: newUser.email,
            //  subject: "Lull Welcome Notification",
            //  body: "Dear " + newUser.email + ". Welcome to Lull"
        //  }
            
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

            <form action="#" className='signin-form' onSubmit={handleSubmit(loginUser)}>
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

// }
export default Login;
