import React from 'react'
import Static from './Static'

const Gender = () => {
    return (
        <>
            <div id="gender">
                <div className="gender_container container">

                    <Static />

                    <div className="gender_radio que">
                        <h4 className="radio_heading que_heading">
                            What is your gender?
                        </h4>

                                
                        <div className="gender_form que_form">
                            <div className="input">
                                <input type="radio" name="gender" value="male" id="male" className="radiobutton"/><label for="male">Male</label>
                            </div>

                            <div className="input">
                                <input type="radio" name="gender" value="female" id="female" className="radiobutton" /><label for="female">Female</label>
                            </div>

                            <div className="input"> 
                                <input type="radio" name="gender" value="other" id="others" className="radiobutton" /><label for="others">Others</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gender
