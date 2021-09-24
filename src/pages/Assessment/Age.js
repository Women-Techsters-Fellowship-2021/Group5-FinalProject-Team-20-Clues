import React from 'react'
import Static from './Static'

const Age = () => {
    return (
        <>
            <div id="age">
                <div className="age_container container">
                    
                    <Static />

                    <div className="age_dropdown que">
                        <h4 className="age_heading que_heading">
                            How old are you?
                        </h4>

                        <form action="#" className="age_form que_form">
                            <select name="age" id="age-select" className="select">
                                <option value="">Select your age</option>
                                <option value="eighteen">18</option>
                                <option value="ninteen">19</option>
                                <option value="twenty">20</option>
                                <option value="twenty_one">21</option>
                                <option value="twenty_two">22</option>
                                <option value="twenty_three">23</option>
                                <option value="twenty_four">24</option>
                                <option value="twenty_five">25</option>
                                <option value="twenty_six">26</option>
                                <option value="twenty_seven">27</option>
                                <option value="twenty_eight">28</option>
                                <option value="twenty_nine">29</option>
                                <option value="thirty">30</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Age
