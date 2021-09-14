import { FaRegSmile } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="main__container">
            {/* <!-- MAIN TITLE STARTS HERE --> */}
            <div className="main-header">
                <div className='greetings'>
                    <h4>Welcome Jesutofunmi,</h4>
                    <p>How are you feeling today?</p>
                    <div className='user-mood'>
                        <span className='happy'>Happy</span>
                        <span className='sad'>Sad</span>
                        <span className='neutral'>Neutral</span>
                        <span className='excited'>Excited</span>
                    </div>
                </div>
                <div className='tips'>
                    <h3>Daily Tips</h3>
                    <div className='tips-content'>
                        <FaRegSmile className='tips-icon'/>
                        <p className='tips-text'>Be cheerful, open minded today. share a smile with someone and be bright as the sun.</p>
                    </div>
                </div>
            </div>
            {/* <!-- MAIN TITLE ENDS HERE --> */}

            {/* <!-- MAIN CARDS STARTS HERE --> */}
            {/* upcoming appointment  section*/}

            <section className='appointment'>
                <div className="section-intro">
                    <h3>Upcoming Appointments</h3>
                    <button >See All</button>
                </div>
                <div className="card-section">
                    <div className="appointment-card">
                        <div className="card-header">
                            <img src="../images/dashboard/doctor1.png" alt="" />
                            <div className="doctor-detail">
                                <h3 className='doctor-name'>Dr Emila Ken</h3>
                                <p className='doctor-role'>Psycology, New York</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="appointment-date">
                                <p>Next appointment</p>
                                <h3>25 June 2021,</h3>
                            </div>
                            <div className="appointment-time">
                                <p>Time</p>
                                <h3>12:00 PM</h3>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className='Card-footer-icons'>
                                <img src="..//images/icons/video.svg" alt="video-icon" />
                                <img src="../images/icons/call.svg" alt="call-icon" />
                            </div>
                            <div className='loading-icons'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="appointment-card">
                        <div className="card-header">
                            <img src="../images/dashboard/doctor1.png" alt="" />
                            <div className="doctor-detail">
                                <h3 className='doctor-name'>Dr Emila Ken</h3>
                                <p className='doctor-role'>Psycology, New York</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="appointment-date">
                                <p>Next appointment</p>
                                <h3>25 June 2021,</h3>
                            </div>
                            <div className="appointment-time">
                                <p>Time</p>
                                <h3>12:00 PM</h3>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className='Card-footer-icons'>
                                <img src="../images/icons/video.svg" alt="video-icon" />
                                <img src="../images/icons/call.svg" alt="call-icon" />
                            </div>
                            <div className='loading-icons'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="appointment-card">
                        <div className="card-header">
                            <img src="../images/dashboard/doctor1.png" alt="" />
                            <div className="doctor-detail">
                                <h3 className='doctor-name'>Dr Emila Ken</h3>
                                <p className='doctor-role'>Psycology, New York</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="appointment-date">
                                <p>Next appointment</p>
                                <h3>25 June 2021,</h3>
                            </div>
                            <div className="appointment-time">
                                <p>Time</p>
                                <h3>12:00 PM</h3>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className='Card-footer-icons'>
                                <img src="../images/icons/video.svg" alt="video-icon" />
                                <img src="../images/icons/call.svg" alt="call-icon" />
                            </div>
                            <div className='loading-icons'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>

            <section className='programs'>
                <div className="section-intro">
                    <h3>Recent Programs</h3>
                    <button >See All</button>
                </div>
                <div className="card-section">
                    <div className="program-card">
                        <div className="program-img">
                            <img src="../images/dashboard/programs.png" alt="" />
                        </div>
                        <div className="program-content">
                            <h3>How to handle Stress</h3>
                            <p>Jessica Smith</p>
                            <span>1 day ago</span>
                        </div>
                    </div>
                    <div className="program-card">
                        <div className="program-img">
                            <img src="../images/dashboard/programs.png" alt="" />
                        </div>
                        <div className="program-content">
                            <h3>How to handle Stress</h3>
                            <p>Jessica Smith</p>
                            <span>1 day ago</span>
                        </div>
                    </div>
                    <div className="program-card">
                        <div className="program-img">
                            <img src="../images/dashboard/programs.png" alt="" />
                        </div>
                        <div className="program-content">
                            <h3>How to handle Stress</h3>
                            <p>Jessica Smith</p>
                            <span>1 day ago</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard