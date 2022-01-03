import React from 'react'
import "./Services.css";

function Servicesection(props) {
    return (
        <div className="flip-card">
        <div className="flip-card-inner">
        <div className="flip-card-front">
        <img className="portfoliocardimage"src={props.image} alt="Portfolio"/>
        </div>
        <div className="flip-card-back">
        <h1 className="fliptitle">{props.title}</h1>
        <p className="fliptext">{props.description}</p>
  
        </div>
        </div>
    </div>
    )
}

export default Servicesection
