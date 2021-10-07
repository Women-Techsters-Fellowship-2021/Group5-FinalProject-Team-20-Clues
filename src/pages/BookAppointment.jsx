import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import { routes } from "../routes"

const BookAppointment = () => {
    return (
        <div className='book-appointment'>
            <div className='prospect-profile'>
                <div className='prospect-header'>
                    <img src="../../images/bookAppointment/appointment1.png" alt="therapist" />
                    <div className='prospect-details'>
                        <h3>Dr Emelia Ken</h3>
                        <p>Psychologu, New York</p>
                        <span>
                            <FaStar className='prospect-icon'/> 5.0
                        </span>
                    </div>
                </div>
                <div className='prospect-ratings'>
                    <p>Likes<span>50</span></p>
                    <p>Activities<span>13</span></p>
                    <p>Review<span>10</span></p>
                </div>
            </div>
            <div className='prospect-intro'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc eleifend nec elementum, nunc. 
                    Amet morbi phasellus mi interdum. Neque, vitae, praesent tortor sed eget.
                </p>
                <div>
                    <Link to={routes.Schedule} className='prospect-btn'>book appointment </Link>
                </div>
            </div>
            <div>
                <span className='prospect-review'>Dr Emilia Reviews</span>
                <div className='review-container'>
                    <div className='review-details'>
                        <img src='../../images/dashboard/avatar.png' alt="reviewer" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In nunc eleifend nec elementum, nunc. Amet morbi phasellus mi
                        </p>
                    </div>
                    <div className='review-details'>
                        <img src='../../images/dashboard/avatar.png' alt="reviewer" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In nunc eleifend nec elementum, nunc. Amet morbi phasellus mi
                        </p>
                    </div>
                    <div className='review-details'>
                        <img src='../../images/dashboard/avatar.png' alt="reviewer" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In nunc eleifend nec elementum, nunc. Amet morbi phasellus mi
                        </p>
                    </div>
                    <div className='review-details'>
                        <img src='../../images/dashboard/avatar.png' alt="reviewer" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In nunc eleifend nec elementum, nunc. Amet morbi phasellus mi
                        </p>
                    </div>
                    <div className='review-details'>
                        <img src='../../images/dashboard/avatar.png' alt="reviewer" />
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
