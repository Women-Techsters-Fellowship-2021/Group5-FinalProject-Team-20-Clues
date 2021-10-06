import { useState, useEffect} from 'react';
import { FaRegSmile, FaRegUser  } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'
import Dropdown from '../components/Dropdown';


const Dashboard = () => {

    const [activeTab, setActiveTab] = useState(1);
    const [tabsClick, setTabsClick] = useState(1);
    const [userInfo, setUserInfo] = useState(null);

    const toggleTab = (index) => {
        setActiveTab(index);
    };
    const handleTabsClick = (index) => {
        setTabsClick(index);
    };
    useEffect(()=>{
     const user =   JSON.parse(localStorage.getItem("userInformation")) 
     console.log(user)
     setUserInfo(user)

}, [])

    const date= new Date().getDate() + '/' + (new Date().getMonth()+1) + '/' + new Date().getFullYear();

    return (
        <div className="main__container">
            {/* <!-- MAIN TITLE STARTS HERE --> */}
            <div className="main-header">
                <div className='greetings'>
                    <div className="greeting-one">
                      {userInfo ? <h4>Welcome, {userInfo.userEmail}</h4> : null}
                        <p>Have a nice day and don't forget to take care of yourself!</p>
                    </div>
                    <div className="greeting-two">
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

            <Dropdown />

            {/* <!-- MAIN TITLE ENDS HERE --> */}

            {/* <!-- MAIN CARDS STARTS HERE --> */}
            {/* upcoming appointment  section*/}

            <section className='appointment'>
                <div className="section-intro">
                    <h3 
                        className={activeTab === 1 ? "optionTabs activeTabs" : "optionTabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Upcoming Appointments</h3>
                    <h3
                        className={activeTab === 2 ? "optionTabs activeTabs" : "optionTabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Upcoming Programs</h3>
                    <button >See All</button>
                </div>
                <div
                    className={activeTab === 1 ? "tabContent  activeTabs-content" : "tabContent"}
                >
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
                                    <img src="../images/icons/video2.svg" alt="video-icon" />
                                    <img src="../images/icons/call.png" alt="call-icon" />
                                </div>
                                <Dropdown
                                    headerTitle={
                                        <div className='loading-icons'>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    }
                                    dropdownContent={
                                        <ul className="dropdown-list">
                                                <li className="dropdown-list-item dropdown-options-text">
                                                    <FaRegUser className='dropdown-options-icon'/>Reschedule Appointment
                                                </li>
                                                <li className="dropdown-list-item dropdown-options-text dropdown-red">
                                                    <GiCancel className='dropdown-options-icon'/>  Cancel Appointment
                                                </li>
                                        </ul>
                                    }
                                />
                            </div>
                        </div>
                        <div className="appointment-card">
                            <div className="card-header">
                                <img src="../images/dashboard/doctor2.png" alt="" />
                                <div className="doctor-detail">
                                    <h3 className='doctor-name'>Dr Patricia Kaluu</h3>
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
                                    <img src="../images/icons/video2.svg" alt="video-icon" />
                                    <img src="../images/icons/call.png" alt="call-icon" />
                                </div>
                                <Dropdown
                                    headerTitle={
                                        <div className='loading-icons'>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    }
                                    dropdownContent={
                                        <ul className="dropdown-list">
                                                <li className="dropdown-list-item dropdown-options-text">
                                                    <FaRegUser className='dropdown-options-icon'/>Reschedule Appointment
                                                </li>
                                                <li className="dropdown-list-item dropdown-options-text dropdown-red">
                                                    <GiCancel className='dropdown-options-icon'/>  Cancel Appointment
                                                </li>
                                        </ul>
                                    }
                                />
                            </div>
                        </div>
                        <div className="appointment-card">
                            <div className="card-header">
                                <img src="../images/dashboard/doctor3.png" alt="" />
                                <div className="doctor-detail">
                                    <h3 className='doctor-name'>Dr Liu Kong</h3>
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
                                    <img src="../images/icons/video2.svg" alt="video-icon" />
                                    <img src="../images/icons/call.png" alt="call-icon" />
                                </div>
                                <Dropdown
                                    headerTitle={
                                        <div className='loading-icons'>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    }
                                    dropdownContent={
                                        <ul className="dropdown-list">
                                                <li className="dropdown-list-item dropdown-options-text">
                                                    <FaRegUser className='dropdown-options-icon'/>Reschedule Appointment
                                                </li>
                                                <li className="dropdown-list-item dropdown-options-text dropdown-red">
                                                    <GiCancel className='dropdown-options-icon'/>  Cancel Appointment
                                                </li>
                                        </ul>
                                    }
                                />
                            </div>
                        </div>
                    </div> 
                </div>
                <div
                    className={activeTab === 2 ? "tabContent  activeTabs-content" : "tabContent"}
                >
                    <div className="card-section">
                        <div className="program-card">
                            <div className="program-img">
                                <img src="../images/dashboard/program1.png" alt="programs" />
                            </div>
                            <div className="program-content">
                                <h3>How to handle Stress</h3>
                                <h4>Dr. Jessica Smith</h4>
                                <p>Date: <span>24 Sept. 2021</span> </p>
                                <p>Time: <span>2pm gmt+1</span>  </p>
                            </div>
                        </div>
                        <div className="program-card">
                            <div className="program-img">
                                <img src="../images/dashboard/program2.png" alt="programs" />
                            </div>
                            <div className="program-content">
                                <h3>Dealing with Anxiety Disorder</h3>
                                <h4>Dr. Liu Kong</h4>
                                <p>Date: <span>24 Sept. 2021</span> </p>
                                <p>Time: <span>2pm gmt+1</span>  </p>
                            </div>
                        </div>
                        <div className="program-card">
                            <div className="program-img">
                                <img src="../images/dashboard/program3.png" alt="programs" />
                            </div>
                            <div className="program-content">
                                <h3>Social Media in Relation to Mental</h3>
                                <h4>Dr. Patricia Kaluu</h4>
                                <p>Date: <span>24 Sept. 2021</span> </p>
                                <p>Time: <span>2pm gmt+1</span>  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='programs'>
                <div className="section-intro">
                    <h3 
                        className={tabsClick === 1 ? "historyTabs active-historyTabs" : "historyTabs"}
                        onClick={() => handleTabsClick(1)}
                    >
                        Appointment History
                    </h3>
                    <h3 
                        className={tabsClick === 2 ? "historyTabs active-historyTabs" : "historyTabs"}
                        onClick={() => handleTabsClick(2)}
                    >
                        Programs History
                    </h3>
                    <button >See All</button>
                </div>

                <div
                    className={tabsClick === 1 ? "historyContent  active-historyContent " : "historyContent"}
                >
                    <div className="appointment-history-containner history-section">
                        <div className='appointment-history-header'>
                            <ul>
                                <li>Name of Specialist</li>
                                <li>Hospital Name</li>
                                <li> session Medium</li>
                                <li>Date</li>
                                <li> Duration</li>
                            </ul>
                        </div>
                        <div className='appointment-history-card'>
                            <ul>
                                <li>Dr Emeila Ken</li>
                                <li>NY Specialist Hospital</li>
                                <li>Video Call</li>
                                <li>25/06/21</li>
                                <li>01:16:20</li>
                            </ul>
                        </div>
                    </div> 
                </div>

                <div
                    className={tabsClick === 2 ? "historyContent  active-historyContent" : "historyContent"}
                >
                    <div className="history-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Program Title</th>
                                    <th>Facilitator</th>
                                    <th>Date Held</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>How to Handle Stress</td>
                                    <td>Dr. Jessica Smith</td>
                                    <td>{date}</td>
                                    <td>2PM GMT +1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                </div>
            </section>
        </div>
    )
}

export default Dashboard