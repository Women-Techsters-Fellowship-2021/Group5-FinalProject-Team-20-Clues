import React from 'react'
import Static from './Static'

const Relationship = () => {
    return (
        <>
            <div id="relationship">
                <div className="relationship_container container">
                    <Static />

                    <div className="relationship_radio que">
                        <h4 className="radio_heading que_heading">
                            What is your relationship status?
                        </h4>

                                
                        <div className="relationship_form que_form">
                            <div className="radio">
                                <div>
                                    <div className="input">
                                        <input type="radio" name="status" value="single" id="single" className="radiobutton"/><label for="single">Single</label>
                                    </div>

                                    <div className="input">
                                        <input type="radio" name="status" value="dating" id="dating" className="radiobutton" /><label for="dating">Dating</label>
                                    </div>

                                    <div className="input"> 
                                        <input type="radio" name="status" value="married" id="married" className="radiobutton" /><label for="married">Married</label>
                                    </div>
                                </div>

                                <div>
                                    <div className="input">
                                        <input type="radio" name="status" value="open" id="open" className="radiobutton"/><label for="open">Open Relationship</label>
                                    </div>

                                    <div className="input">
                                        <input type="radio" name="status" value="seperated" id="seperated" className="radiobutton" /><label for="seperated">Seperated</label>
                                    </div>

                                    <div className="input"> 
                                        <input type="radio" name="status" value="divorced" id="divorced" className="radiobutton" /><label for="divorced">Divorced</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Relationship
