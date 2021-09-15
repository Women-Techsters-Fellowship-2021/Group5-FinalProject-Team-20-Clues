import { FaStar } from "react-icons/fa"

const Therapists =() => {
    return (
        <div className='therapist-section'>
            <div className='popular-therapist'> 
                <h3 className='categories-intro'>popular Therapists</h3>
                <div className='therapist-list'>
                    <div className='therapist'>
                        <img src="../images/therapist/therapist1.png" alt="therapist-image" />
                        <h4>Dr Emilia Ken</h4>
                        <p>New york Hospital</p>
                    </div>
                    <div className='therapist'>
                        <img src="../images/therapist/therapist2.png" alt="therapist-image" />
                        <h4>Dr. Patrick Steve</h4>
                        <p>Lagoon Hospital</p>
                    </div>
                    <div className='therapist'>
                        <img src="../images/therapist/therapist3.png" alt="therapist-image" />
                        <h4>Dr. Joe Stone</h4>
                        <p>New york Hospital</p>
                    </div>
                </div>
            </div>

            <div className='online-doctors'> 
                <h3 className='categories-intro'>Online Doctors</h3>
                <div className='online-doctors-list'>
                    <div className='online-doctors-card'>
                        <img src="../images/therapist/online-doctor.png" alt="therapist-image" />
                        <div className='online-doctors-details'>
                            <h4>Dr Emilia Ken</h4>
                            <p>New york Hospital</p>
                        </div>
                        <div className='online-doctors-ratings'>
                            <FaStar className='rating-icon'/>
                            5.0
                        </div>
                        <button className='appointment-action-btn'>Book An Appointment</button>
                    </div>
                    <div className='online-doctors-card'>
                        <img src="../images/therapist/online-doctor.png" alt="therapist-image" />
                        <div className='online-doctors-details'>
                            <h4>Dr Emilia Ken</h4>
                            <p>New york Hospital</p>
                        </div>
                        <div className='online-doctors-ratings'>
                            <FaStar className='rating-icon'/>
                            5.0
                        </div>
                        <button className='appointment-action-btn'>Book An Appointment</button>
                    </div>
                    <div className='online-doctors-card'>
                        <img src="../images/therapist/online-doctor.png" alt="therapist-image" />
                        <div className='online-doctors-details'>
                            <h4>Dr Emilia Ken</h4>
                            <p>New york Hospital</p>
                        </div>
                        <div className='online-doctors-ratings'>
                            <FaStar className='rating-icon'/>
                            5.0
                        </div>
                        <button className='appointment-action-btn'>Book An Appointment</button>
                    </div>
                    <div className='online-doctors-card'>
                        <img src="../images/therapist/online-doctor.png" alt="therapist-image" />
                        <div className='online-doctors-details'>
                            <h4>Dr Emilia Ken</h4>
                            <p>New york Hospital</p>
                        </div>
                        <div className='online-doctors-ratings'>
                            <FaStar className='rating-icon'/>
                            5.0
                        </div>
                        <button className='appointment-action-btn'>Book An Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Therapists
