import React from 'react';
import Lady1 from '../images/lady1.png';
import Lady2 from '../images/lady2.png';

import Endcall from '../images/icons/end-call.png';
import Muteaudio from '../images/icons/mute-audio.png';
import Mutevideo from '../images/icons/mute-video.png';
import Members from '../images/icons/add-members.png';
import Groupline from '../images/icons/group-line.png';
import Typemsg from '../images/icons/type-msg.png';

import '../styles/component/Videocall.css';

const Videocall = () => {
    return (
        <div className="video_call_section">
            <div className="call_images">
            <img className="lady1" src={Lady1} alt=""/>
            <img className="lady2" src={Lady2} alt=""/> 
            
            <div className="call_icons">
            <img className="mute_audio" src={Muteaudio} height="30px" alt=""/>
            <img className="end_call" src={Endcall} height="40px" alt=""/> 
            <img className="mute_video" src={Mutevideo} height="30px" alt=""/> 

            </div>
            </div>

            <div className="call_conversation">
                <div className="button-cell">
                <button className="add_member">
                <img className="end_call" src={Members} height="20px" alt=""/> 
                    Add new member
                </button>

                </div>

                <div className="convos">

                    <div className="members_conversation">
                        <button className="add_call">
                        <i class="far fa-comment"></i>
                        <h4>Conversations</h4>
                        </button>
                        <input className="convo_input" type="" />

                        <button className="group_line">
                        <img  src={Groupline} height="30px" text="Members" alt=""/> 
                        <h4>Members</h4>
                        </button>
                       
                    </div>

                    <div className="type_msg">
                        <input className="type_msg_input" placeholder="Type your message..." />
                        <button>
                        <img className="type_text" src={Typemsg} height="20px"  alt=""/>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Videocall;
