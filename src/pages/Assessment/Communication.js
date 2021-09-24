import React from 'react'
import Static from './Static'

const Communication = () => {
    return (
        <>
            <div id="communication">
                <div className="communication_container container">

                    <Static />

                    <div className="communication_radio que">
                        <h4 className="radio_heading que_heading">
                            How do you prefer to communicate with your therapist?
                        </h4>
  
                        <div className="communication_form que_form">
                            <div className="input">
                                <input type="radio" name="communication" value="message" id="message" className="radiobutton"/><label for="message">Via messaging</label>
                            </div>

                            <div className="input">
                                <input type="radio" name="communication" value="phone" id="phone" className="radiobutton" /><label for="phone">Via phone call or video sessions</label>
                            </div>

                            <div className="input"> 
                                <input type="radio" name="communication" value="not_sure" id="not_sure" className="radiobutton" /><label for="not_sure">Not sure yet</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Communication
