import React from 'react'
import Static from './Static'

const Habits = () => {
    return (
        <>
            <div id="habits">
                <div className="habits_container container">

                    <Static />

                    <div className="habits_radio que">
                        <h4 className="radio_heading que_heading">
                            Which of these areas of your life do you want to improve?
                        </h4>
                                
                        <div className="habits_form que_form">
                            <form className="boxes">
                                <div>
                                    <div className="boxed">
                                        <input type="checkbox" id="eating" name="eating" value="eating" />
                                        <label for="eating"> Eating</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="exercise" name="exercise" />
                                        <label for="exercises"> Exercise</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="financies" name="financies" />
                                        <label for="financies"> Financies</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="health" name="health" />
                                        <label for="health"> Health</label>
                                    </div>
                                </div>

                                <div>
                                    <div className="boxed">
                                        <input type="checkbox" id="relationships" name="relationships" />
                                        <label for="relationships"> Relationship</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="career" name="career" />
                                        <label for="career"> Career</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="sleeping" name="sleeping" />
                                        <label for="sleeping"> Sleeping Habits</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="social" name="social" />
                                        <label for="social"> Social</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Habits
