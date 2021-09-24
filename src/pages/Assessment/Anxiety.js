import React from 'react'
import Static from './Static'

const Anxiety = () => {
    return (
        <>
            <div id="anxiety">
                <div className="anxiety_container container">
                    <Static />

                    <div className="anxiety_radio que">
                        <h4 className="radio_heading que_heading">
                            Are you currently experiencing anxiety, panic attacks or stress?
                        </h4>

                                
                        <div className="anxiety_form que_form">
                            <div className="input">
                                <input type="radio" name="yes" value="yes" id="yes" className="radiobutton"/><label for="yes">Yes</label>
                            </div>

                            <div className="input">
                                <input type="radio" name="no" value="no" id="no" className="radiobutton" /><label for="no">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Anxiety
