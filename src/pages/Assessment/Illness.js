import React from 'react'
import Static from './Static'

const Illness = () => {
    return (
        <>
            <div id="illness">
                <div className="illness_container container">
                    <Static />

                    <div className="illness_radio que">
                        <h4 className="radio_heading que_heading">
                            Are you having any chronic illness or pain?
                        </h4>

                        <div className="illness_form que_form">
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

export default Illness
