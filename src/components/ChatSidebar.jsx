import { useState } from 'react';
import '../styles/component/ChatSidebar.css';

import '../styles/component/MobileviewMessage.css';


import Avatar1 from '../images/Avatar1.png';
import Avatar2 from '../images/Avatar2.png';
import Avatar3 from '../images/Avatar3.png';
import Avatar4 from '../images/Avatar4.png';
import Avatar5 from '../images/Avatar5.png';
import Avatar6 from '../images/Avatar6.png';
import Avatar7 from '../images/Avatar7.png';
import Avatar8 from '../images/Avatar8.png';
import Avatar9 from '../images/Avatar9.png';
import Avatar10 from '../images/Avatar10.png';
import Avatar11 from '../images/Avatar11.png';

import Phonecall from '../images/icons/phone.png';
import Videocall from '../images/icons/video-camera.png';
import Outgoing from '../images/icons/outgoing-call.png';
import Missed from '../images/icons/missed-call.png';
import Quickcall from '../images/icons/quick-call.png';


const ChatSidebar = () => {
        const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) => {
          setToggleState(index);
        };
    return (
        <>

        <div className="tabview-container">

<div className="block-tabview">

<button
  className={toggleState === 1 ? "tabview active-tabview" : "tabview"}
  onClick={() => toggleTab(1)}
>
  CHATS
</button>

<button
  className={toggleState === 2 ? "tabview active-tabview" : "tabview"}
  onClick={() => toggleTab(2)}
>
CALLS
</button>


</div>

    <div className="content-tabview">

<div
  className={toggleState === 1 ? "content-mobile  active-content-mobile" : "content-mobile"}
>

<div className="chat_sidebar">

<div className="all-chat">
    <h4>All Chats</h4>
</div>
    
    <div className="avatar_style">
    <img src={Avatar1} alt=""/>
    <div className="avatar-content">
        <h4>Dr Emilia Ken</h4>
        <p>Can we schedule a call...</p>
    </div>

    <span>8/30/21</span>
    </div>

    <div className="avatar1_style">
    <img src={Avatar2} alt=""/>
    <div className="avatar1-content">
        <h4>Dr Patricia Kaluu</h4>
        <p>I will send the prescripti...</p>
    </div>
    <span>8/29/21</span>
    </div>

    <div className="avatar1_style">
    <img src={Avatar3} alt=""/>
    <div className="avatar1-content">
        <h4>Dr Liuu Kong</h4>
        <p>As regards to your last app...</p>
    </div>
    <span>8/29/21</span>
    </div>

    <div className="avatar1_style">
    <img src={Avatar4} alt=""/>
    <div className="avatar1-content">
        <h4>Dr Pat Adams</h4>
        <p>Take a lot of rest, eat frui...</p>
    </div>
    <span>8/29/21</span>
    </div>

    <div className="avatar1_style">
    <img src={Avatar5} alt=""/>
    <div className="avatar1-content">
        <h4>Dr Valerie Bell</h4>
        <p>Please can you tell me...</p>
    </div>
    <span>7/14/21</span>
    </div>

    <div className="avatar1_style">
    <img src={Avatar6} alt=""/>
    <div className="avatar1-content">
        <h4>Dr Michael Dam</h4>
        <p>You would have to work on...</p>
    </div>
    <span>7/14/21</span>
    </div>

    <div className="avatar1_style">
    <img src={Avatar7} alt=""/>
    <div className="avatar1-content">
        <h4>Dr Emily Kan</h4>
        <p>We should start a new p...</p>
    </div>
    <span>5/31/21</span>
    </div>

    <div className="avatar1_style">
    <img src={Avatar8} alt=""/>
    <div className="avatar1-content">
        <h4>Dr Natasha Bryant</h4>
        <p>Maintaining healthy li...</p>
    </div>
    <span>5/30/21</span>
    </div>

    <div className="avatar1_style">
    <img src={Avatar9} alt=""/>
    <div className="avatar1-content">
        <h4>Dr Edward Cisse</h4>
        <p>To put the past behind you...</p>
    </div>
    <span>5/29/21</span>
    </div>

    <div className="avatar1_style">
    <img src={Avatar10} alt=""/>
    <div className="avatar1-content">
        <h4>Dr Prince Kachi</h4>
        <p>What's your daily routin...</p>
    </div>
    <span>3/30/21</span>
    </div>

    <div className="avatar1_style">
    <img src={Avatar11} alt=""/>
    <div className="avatar1-content">
        <h4>Dr Iman Caro</h4>
        <p>We should schedule a call...</p>
    </div>
    <span>3/29/21</span>
    </div>   
    
</div>


</div>

<div
  className={toggleState === 2 ? "content-mobile  active-content-mobile" : "content-mobile"}
>
<div className="calls-tab">
            
<div className="call_styles">
            <img src={Avatar1} height="40px" alt=""/>

            <div className="call-content">
            <h4>Dr Emilia Ken</h4>

            <img className="video-call" src={Videocall} height="20px" alt=""/> 
            <div className="call-details">
            <img src={Outgoing} height="8px" alt=""/>
            <span>August 30, 12:00 PM</span>
            </div>

    </div>

    </div>

    <div className="call_styles">
            <img src={Avatar1} height="40px" alt=""/>

            <div className="call-content">
            <h4>Dr Emilia Ken</h4>

            <img className="video-call" src={Videocall} height="20px" alt=""/> 
            <div className="call-details">
            <img src={Missed} height="8px" alt=""/>
            <span>August 30, 12:00 PM</span>
            </div>

    </div>

    </div>

    <div className="call_styles">
            <img src={Avatar1} height="40px" alt=""/>

            <div className="call-content">
            <h4>Dr Emilia Ken</h4>

            <img className="video-call" src={Phonecall} height="20px" alt=""/> 
            <div className="call-details">
            <img src={Missed} height="8px" alt=""/>
            <span>August 30, 12:00 PM</span>
            </div>

    </div>

    </div>

    <div className="call_styles">
            <img src={Avatar1} height="40px" alt=""/>

            <div className="call-content">
            <h4>Dr Emilia Ken</h4>

            <img className="video-call" src={Phonecall} height="20px" alt=""/> 
            <div className="call-details">
            <img src={Missed} height="8px" alt=""/>
            <span>August 30, 12:00 PM</span>
            </div>

    </div>

    </div>

    <div className="call_styles">
            <img src={Avatar1} height="40px" alt=""/>

            <div className="call-content">
            <h4>Dr Emilia Ken</h4>

            <img className="video-call" src={Videocall} height="20px" alt=""/> 
            <div className="call-details">
            <img src={Outgoing} height="8px" alt=""/>
            <span>August 30, 12:00 PM</span>
            </div>

    </div>

    </div>

    <div className="call_styles">
            <img src={Avatar1} height="40px" alt=""/>

            <div className="call-content">
            <h4>Dr Emilia Ken</h4>

            <img className="video-call" src={Videocall} height="20px" alt=""/> 
            <div className="call-details">
            <img src={Missed} height="8px" alt=""/>
            <span>August 30, 12:00 PM</span>
            </div>

    </div>

    </div>

    <div className="call_styles">
            <img src={Avatar1} height="40px" alt=""/>

            <div className="call-content">
            <h4>Dr Emilia Ken</h4>

            <img className="video-call" src={Phonecall} height="20px" alt=""/> 
            <div className="call-details">
            <img src={Missed} height="8px" alt=""/>
            <span>August 30, 12:00 PM</span>
            </div>

    </div>

    </div>

    <section className="quick-call-mobile">
    <img className="add-call" src={Quickcall} height="40px" alt=""/>
    </section>

        </div>
</div>

    </div>
</div>
        
 
        </>
    )
}

export default ChatSidebar;
