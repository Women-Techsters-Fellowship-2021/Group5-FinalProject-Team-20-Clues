
import { Link } from "react-router-dom";
import { useHistory } from "react-router";



const Resetpassword = () => {

        const history = useHistory();
    return ( 
            <div className="auth">
            <div  className="reset-left">       
            </div>
             <div className="reset-right">
                 
        <div className="signin-card">
			<h2>Forgot Your Password</h2>
             <p className='signup-contents'>Enter your email address to get a link to reset your password.</p>
            <form action="#" className='signin-form' onSubmit>
                <div>
                    <input type="email" name='email' placeholder='Email'/>
                </div>
             <div>
                 <ul>
                 <li><button className= 'resetpassword-btn' type='submit' onClick={() =>history.push("/login")}>
                   Cancel</button></li>
                <li><button className= 'resetpassword' type='submit'><Link to= '/login' />Reset</button></li>
                </ul>
                </div>
            </form>
        </div>
        </div>
     </div>
    );
}

export default Resetpassword;
