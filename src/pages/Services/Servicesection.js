import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Services.css";

function Servicesection(props) {
    return (
        <div className="container1">
        <div className="card">
          <div className="imgBx">
            <img src={props.image} alt="service"/>
          </div>
          <div className="contentBx">
            <h2>{props.title}</h2>
            <div className="size">
              <h3>Description</h3>
              <p>If the idea of selling online attracts you, we are here to transform it from a dream into a digital reality.</p>
            </div>
            <NavLink className="homebutton container" to="/contact" exact> Contact Me</NavLink>

          </div>
        </div>
      </div>
    )
}

export default Servicesection
