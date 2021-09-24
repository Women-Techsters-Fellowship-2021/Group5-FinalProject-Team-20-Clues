import React from 'react'
// import Steps from './Steps';
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <>
        <div id="welcome">
            <div className="welcome">
                <h4 className="welcome_heading">Welcome! Start your journey to a better mental health.</h4>
                <Link to="/steps">
                    <button className="welcome_btn">Start Assessment</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Welcome
