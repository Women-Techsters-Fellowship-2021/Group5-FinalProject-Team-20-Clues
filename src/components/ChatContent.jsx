import React from 'react';


import Attachment from '../images/icons/attachment.png';
import Smiley from '../images/icons/smiley.png';
import Sendbutton from '../images/icons/Send-button.png';

import '../styles/component/ChatContent.css';

const ChatContent = () => {
    return (
        <div className="chat-content">

            <div className="msg-received">
            <div className="content-received">
                <p>
                    We should commence therapy as soon as possible 
                </p>
                <span> 12:12PM</span>
            </div>
            </div>

            <div className="msg-sent">
            <div className="content-sent">
                <p>
                    Can we schedule a call for friday 
                </p>
                <span> 12:19PM</span>
            </div>
            </div>

            <div className="msg-received">
            <div className="content-received">
                <p>
                    We should commence therapy as soon as possible 
                </p>
                <span> 12:12PM</span>
            </div>
            </div>

            <div className="msg-sent">
            <div className="content-sent">
                <p>
                    Can we schedule a call for friday 
                </p>
                <span> 12:19PM</span>
            </div>
            </div>

            <div className="msg-received">
            <div className="content-received">
                <p>
                    We should commence therapy as soon as possible 
                </p>
                <span> 12:12PM</span>
            </div>
            </div>

            <div className="msg-sent">
            <div className="content-sent">
                <p>
                    Can we schedule a call for friday 
                </p>
                <span> 12:19PM</span>
            </div>
            </div>

            <footer className="chat_content_footer">
                
                <div className="chat-input">
                <img className="smiley" src={Smiley} alt=""/>
                <input placeholder="Type a message"/>
                 <img className="attachment" src={Attachment} alt=""/>
                </div>


                <div className="footer-content">
                <img src={Sendbutton} width="40px" alt=""/>
                </div>
               
            </footer>

        </div>
    )
}

export default ChatContent;
