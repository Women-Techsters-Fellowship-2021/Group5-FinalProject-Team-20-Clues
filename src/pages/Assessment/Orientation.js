import React from 'react'
import Static from './Static'

const Orientation = () => {
    return (
        <>
            <div id="orientation">
                <div className="orientation_container container">
                    
                    <Static />

                    <div className="orientation_radio que">
                        <h4 className="radio_heading que_heading">
                            What is your sexual orientation?
                        </h4>

                                
                        <div className="orientation_form que_form">
                            <div className="input">
                                <input type="radio" name="sexual-orientation" value="straight" id="straight" className="radiobutton"/><label for="straight">Straight</label>
                            </div>

                            <div className="input">
                                <input type="radio" name="sexual-orientation" value="gay" id="gay" className="radiobutton" /><label for="gay">Gay</label>
                            </div>

                            <div className="input"> 
                                <input type="radio" name="sexual-orientation" value="Lesbian" id="Lesbian" className="radiobutton" /><label for="lesbian">Lesbian</label>
                            </div>

                            <div className="input"> 
                                <input type="radio" name="sexual-orientation" value="other" id="others" className="radiobutton" /><label for="others">Others</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orientation
