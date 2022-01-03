import React from 'react'

function Coursecard(props) {
    return (
        // <div>
        //      <div>
        //     <div className="sourav-coarse">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="coarse-development">
        //                     <div className="coarse-card">
        //                         <div className="coarse-card-icon-1">
        //                             <img className="coarseimage" src={props.courselogo} alt="about sourav"></img>
        //                         </div>
        //                         <div className="course-inner-boxes">
        //                         <h1>{props.coursecompany}</h1>
        //                         <h2>{props.coursetitle}</h2>
        //                             <p>{props.courseyear}</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </div>
        <div>
             <div>
            <div className="sourav-coarse">
                <div className="container">
                    <div className="row">
                        <div className="coarse-development">
                            <div className="coarse-card">
                                <div className="coarse-card-icon-1">
                                    <img className="coarseimage" src={props.courselogo} alt="about sourav"></img>
                                </div>
                                <div className="course-inner-boxes">
                                <h1>{props.coursecompany}</h1>
                                <h2>{props.coursetitle}</h2>
                                    <p>{props.courseyear}</p>
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

export default Coursecard
