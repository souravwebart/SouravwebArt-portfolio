import React from 'react'
import "./Carddesign.css";

function Carddesign(props) {
    return (
        <div>
            <div className="about-card-course">
                <div className="container">
                    <div className="row">
                        <div className="about-card">
                            <div className="about-action-1">
                                <div className="about-icon-1">
                                    <img className="aboutcardimage" src={props.img} alt="about sourav"></img>
                                </div>
                                <div className="about-inner-boxes">
                                <h1>{props.Name}</h1>
                                    <p>{props.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carddesign
