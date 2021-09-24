import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import { routes } from "../routes"

const BookAppointment = () => {
    return (
        <div className='book-appointment'>
            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h3>Dr Emelia Ken</h3>
                        <p>Psychologu, New York</p>
                        <span>
                            <FaStar /> 5.0
                        </span>
                    </div>
                </div>
                <div>
                    <p>Likes<span>50</span></p>
                    <p>Activities<span>13</span></p>
                    <p>Review<span>10</span></p>
                </div>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc eleifend nec elementum, nunc. 
                    Amet morbi phasellus mi interdum. Neque, vitae, praesent tortor sed eget.
                </p>
                <Link to={routes.Schedule} className='appointment-action-btn'>book appointment </Link>
            </div>
            <div>
                <span>Dr Emilia Reviews</span>
                <div>
                    <div>
                        <img src="../images/dashboard/doctor1.png" alt="therapist" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In nunc eleifend nec elementum, nunc. Amet morbi phasellus mi
                        </p>
                    </div>
                    <div>
                        <img src="../images/dashboard/doctor1.png" alt="therapist" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In nunc eleifend nec elementum, nunc. Amet morbi phasellus mi
                        </p>
                    </div>
                    <div>
                        <img src="../images/dashboard/doctor1.png" alt="therapist" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In nunc eleifend nec elementum, nunc. Amet morbi phasellus mi
                        </p>
                    </div>
                    <div>
                        <img src="../images/dashboard/doctor1.png" alt="therapist" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In nunc eleifend nec elementum, nunc. Amet morbi phasellus mi
                        </p>
                    </div>
                    <div>
                        <img src="../images/dashboard/doctor1.png" alt="therapist" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In nunc eleifend nec elementum, nunc. Amet morbi phasellus mi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment
