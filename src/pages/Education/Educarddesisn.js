import React from 'react'
import "./Education.css";

function Educarddesisn(props) {
    return (
        <div>
             <div>
            <div className="sourav-training">
                <div className="container">
                    <div className="row">
                        <div className="coarse-projecct">
                            <div className="training-card">
                                <div className="training-card-icon-1">
                                    <img className="cardimage" src={props.logo} alt="about sourav"></img>
                                </div>
                                <div className="training-inner-boxes">
                                <h1>{props.name}</h1>
                                <h2>{props.title}</h2>
                                    <p>{props.description}</p>
                                    <p>{props.year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Educarddesisn
