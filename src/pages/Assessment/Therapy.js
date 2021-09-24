import React from 'react'
import Static from './Static'

const Therapy = () => {
    return (
        <>
            <div id="therapy">
                <div className="therapy_container container">
                    <Static />

                    <div className="therapy_radio que">
                        <h4 className="radio_heading que_heading">
                            Have you ever been in therapy or counselling?
                        </h4>
                                
                        <div className="therapy_form que_form">
                            <div className="input">
                                <input type="radio" name="therapy" value="yes" id="yes" className="radiobutton"/><label for="yes">Yes</label>
                            </div>

                            <div className="input">
                                <input type="radio" name="therapy" value="no" id="no" className="radiobutton" /><label for="no">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Therapy
