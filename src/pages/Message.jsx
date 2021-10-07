import { useState } from 'react';
import ChatContent from '../components/ChatContent';
import ChatSidebar from '../components/ChatSidebar';
import Videocall from '../components/Videocall';

import Avatar1 from '../images/Avatar1.png';
import Call from '../images/icons/phone.png';
import Video from '../images/icons/video-camera.png';

import '../styles/component/ChatSidebar.css';

const Message = () => {

    const [isVideoComponent, setIsVideoComponent] = useState(true);
    return (

        <>

        {isVideoComponent && 
        
         <>
             <div className="chat-navs">

        <div className="all-chats">
        <h4>All Chats</h4>
        </div>

        <div className="online-content">
        
            <div className="online_details">
            <img src={Avatar1} alt="" width="30px"/>

            <div className="online_text">
                <h5>Dr Emilia Ken</h5>
                <p>Online</p>
            </div>
                
            </div>

            <div className="online_icons">
            <img src={Call} alt=""/>
            <img onClick={() => setIsVideoComponent(!isVideoComponent)} src={Video} alt=""/> 
            </div>

            </div>

        </div> 
          </>
        }

        
        {isVideoComponent ?  <div className="message-section">
            <ChatSidebar />
            <ChatContent />
        </div> : <Videocall /> }

        </>
    )
}

export default Message;