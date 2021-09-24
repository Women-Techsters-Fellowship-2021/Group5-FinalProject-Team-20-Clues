import React from 'react'
import Static from './Static'

const Suicide = () => {
    return (
        <>
            <div id="suicide">
                <div className="suicide_container container">
                    
                <Static />

                    <div className="suicide_radio que">
                        <h4 className="radio_heading que_heading">
                            Recently, have you thought about suicide?
                        </h4>

                                
                        <div className="suicide_form que_form">
                            <div className="input">
                                <input type="radio" name="suicide" value="yes" id="yes" className="radiobutton"/><label for="yes">Yes</label>
                            </div>

                            <div className="input">
                                <input type="radio" name="suicide" value="no" id="no" className="radiobutton" /><label for="no">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suicide
