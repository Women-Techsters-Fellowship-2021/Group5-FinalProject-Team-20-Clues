import React from 'react'
import Static from './Static'

const Challenges = () => {
    return (
        <>
            <div id="challenges">
                <div className="challenges_container container">
                    <Static />

                    <div className="challenges_radio que">
                        <h4 className="radio_heading que_heading">
                            Are you facing any of these challenges?
                        </h4>


                        <div className="challenges_form que_form">
                            <form className="challenge">
                                <div>
                                    <div className="boxed">
                                        <input type="checkbox" id="abuse" name="abuse" value="abuse" />
                                        <label for="abuse"> Abuse</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="stress" name="stress" />
                                        <label for="stress"> Stress</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="anger" name="anger" />
                                        <label for="anger"> Anger</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="body_shaming" name="body_shaming" />
                                        <label for="body_shaming"> Body shaming</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="anxiety" name="anxiety" />
                                        <label for="anxiety"> Anxiety</label>
                                    </div>
                                </div>

                                <div>
                                    <div className="boxed">
                                        <input type="checkbox" id="eating_disorder" name="eating_disorder" />
                                        <label for="eating_disorder"> Eating disorder</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="insomnia" name="insomnia" />
                                        <label for="insomnia"> Insomnia</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="depression" name="depression" />
                                        <label for="depression"> Depression</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="parenting" name="parenting" />
                                        <label for="parenting"> Pareting</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="self_esteem" name="self_esteem" />
                                        <label for="self_esteem"> Self-esteem</label>
                                    </div>
                                </div>

                                <div>
                                    <div className="boxed">
                                        <input type="checkbox" id="panic_attacks" name="panic_attacks" />
                                        <label for="panic_attacks"> Panic attacks</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="relationships" name="relationships" />
                                        <label for="relationships"> Relationships</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="fatigue" name="fatigue" />
                                        <label for="fatigue"> Fatigue</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="social_anxiety" name="social_anxiety" />
                                        <label for="social_anxiety"> Social anxiety</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="motivation" name="motivation" />
                                        <label for="motivation"> Motivation</label>
                                    </div>
                                </div>

                                <div>
                                    <div className="boxed">
                                        <input type="checkbox" id="loss" name="loss" />
                                        <label for="loss"> Loss</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="gender_identity" name="gender_identity" />
                                        <label for="gender_identity"> Gender Identity</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="sexuality" name="sexuality" />
                                        <label for="sexuality"> Sexuality</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="family" name="family" />
                                        <label for="family"> Family</label>
                                    </div>

                                    <div className="boxed">
                                        <input type="checkbox" id="intimacy" name="intimacy" />
                                        <label for="intimacy"> Intimacy</label>
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

export default Challenges
