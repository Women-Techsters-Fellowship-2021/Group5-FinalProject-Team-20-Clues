import React from 'react'
import Static from './Static'

const Sleeping = () => {
    return (
        <>
            <div id="sleeping">
                <div className="sleeping_container container">
                    <Static />

                    <div className="sleeping_radio que">
                        <h4 className="radio_heading que_heading">
                            How would you rate your sleeping habit?
                        </h4>

                                
                        <div className="sleeping_form que_form">
                            <div className="input">
                                <input type="radio" name="sleeping" value="good" id="good" className="radiobutton"/><label for="good">Good</label>
                            </div>

                            <div className="input">
                                <input type="radio" name="sleeping" value="poor" id="poor" className="radiobutton" /><label for="poor">Poor</label>
                            </div>

                            <div className="input"> 
                                <input type="radio" name="sleeping" value="fair" id="fair" className="radiobutton" /><label for="fair">Fair</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sleeping
