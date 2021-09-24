import React from 'react'
import Static from './Static'

const Country = () => {
    return (
        <>
            <div id="country">
                <div className="country_container container">
                    <Static />

                    <div className="country_radio que">
                        <h4 className="radio_heading que_heading">
                            What country do you live in?
                        </h4>

                                
                        <div className="country_form que_form">
                            <select name="country" id="Select Country" className="select">
                                <option value="">Select your country</option>
                                <option value="southafrica">South Africa</option>
                                <option value="kenya">Kenya</option>
                                <option value="ghana">Ghana</option>
                                <option value="nigeria">Nigeria</option>
                                <option value="namibia">Namibia</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Country
