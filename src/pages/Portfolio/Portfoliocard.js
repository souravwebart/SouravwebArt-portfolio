import React from 'react'
import "./Portfolio.css";

function Portfoliocard(props) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
            <div className="flip-card-front">
            <img className="portfoliocardimage"src={props.image} alt="Portfolio"/>
            </div>
            <div className="flip-card-back">
            <h1 className="fliptitle">{props.title}</h1>
            <div><a className="flipbutton" href={props.url}>View Project or Code</a></div>
      
            </div>
            </div>
        </div>
    )
}

export default Portfoliocard
