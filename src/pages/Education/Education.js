import React from 'react'
import "./Education.css";
import "../About/About.css";
import EduardDesisn from "./Educarddesisn";
import EducationTrainingLists from "./Educationlist";
import Coursecard from "./Coursecard";
import CourseLists from "./Courselist";
import videoBg from './video/bg1.mp4';



function Edutraing(EducationTrainingList) {
    return (
        <EduardDesisn
            key={EducationTrainingList.id}
            name={EducationTrainingList.name}
            title={EducationTrainingList.title}
            logo={EducationTrainingList.imgURL}
            description={EducationTrainingList.text}
            year={EducationTrainingList.year}
        />
    )
}
function Coursedetailse(CourseList) {
    return (
        <Coursecard
            key={CourseList.id}
            coursecompany={CourseList.name}
            courselogo={CourseList.imgURL}
            coursetitle={CourseList.title}
            courseyear={CourseList.year}
        />
    )
}
function Education() {
    const [state] = React.useState({
        DiplomaUniversity: "Tamil Nadu Directorate of Technical Education",
        DiplomaCourse: "Diploma in Civil Engineering",
        DiplomaYear: "2011-2014",
        DiplomaDuration: "Full-Time",
        diplomaimg: "./images/tndte.png",
        DegreeUniversity: "Visvesvaraya Technological University, Belgaum (VTU)",
        DegreeCourse: "Bechelor engineering in Civil",
        DegreeYear: "2015-2018",
        DegreeDuration: "Full-Time",
        Degreeimg: "./images/vtu.jpg",
        WebUniversity: "Udemy, Inc (American massive open online course provider)",
        WebCourse: "Full-Stack web development",
        WebYear: "2021",
        WebDuration: "Full-Time",
        Webimg: "./images/udemy.jpg",

    });

    return (
        <>
            <video autoPlay loop muted id="video1"><source src={videoBg} type='video/mp4' /></video>
            <div>
                <div className="education-section">
                    <div className="animationskilltext">
                        <img src="/images/html.png" alt="html"></img>
                        <img src="/images/css.png" alt="css"></img>
                        <img src="/images/mongodb.png" alt="mongodb"></img>
                        <img src="/images/javascript.png" alt="javascript"></img>
                        <img src="/images/boostrap.png" alt="boostrap"></img>
                        <img src="/images/react.png" alt="react"></img>
                        <img src="/images/nodejs.png" alt="node.js"></img>
                        <img src="/images/php.png" alt="php"></img>
                        <img src="/images/mysql.png" alt="mysql"></img>
                        <img src="/images/mongodb.png" alt="mongodb"></img>
                    </div>
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-12 education">
                                <h1 className="h1-eduprimary">My<span className="h1-primarylasttitle"> Education</span></h1>
                                <p className="h2-eduprimary">I actively participated in Digital Marketing, Developing, Social Media Marketing, Graphics Designing, and other tech-related activities. Below are some of my major Trainings, courses, and experiences.</p>
                                <div className="educationcart-section">
                                    <div className="Educationcart">
                                        <div>
                                            <img className="Educationimg" src={state.diplomaimg} alt="Diploma" />
                                            <h1 className="h1-education">{state.DiplomaUniversity}</h1>
                                            <h2 className="h2-education">{state.DiplomaCourse}</h2>
                                            <h3 className="h2-education">{state.DiplomaDuration}</h3>
                                            <p className="p-education">{state.DiplomaYear}</p>
                                        </div>

                                    </div>
                                    <div className="Educationcart">

                                        <div>
                                            <img className="Educationimg" src={state.Degreeimg} alt="Degree" />
                                            <h1 className="h1-education">{state.DegreeUniversity}</h1>
                                            <h2 className="h2-education">{state.DegreeCourse}</h2>
                                            <h3 className="h2-education">{state.DegreeDuration}</h3>
                                            <p className="p-education">{state.DegreeYear}</p>
                                        </div>
                                    </div>
                                    <div className="Educationcart">
                                        <div>
                                            <img className="Educationimg" src={state.Webimg} alt="Degree" />
                                            <h1 className="h1-education">{state.WebUniversity}</h1>
                                            <h2 className="h2-education">{state.WebCourse}</h2>
                                            <h3 className="h2-education">{state.WebDuration}</h3>
                                            <p className="p-education">{state.WebYear}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="educationmiddle container-fluid">
                        <div>
                            <h1 className="h1-eduprimary">Experienced<span className="h1-primarylasttitle"> Training</span></h1>
                        </div>
                        <div className="edutrain container-fluid">
                            {EducationTrainingLists.map(Edutraing)}
                        </div>
                    </div>


                    <div className="clients-sec">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="client-left-section">
                                    <h3 className="client-left-section-text">MY SKILL</h3>
                                </div>
                                <div className="tech-slideshow">
                                    <div className="mover-1"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="educationbuttom">
                        <div>
                            <h1 className="h1-eduprimary">Experienced<span className="h1-primarylasttitle"> Training</span></h1>
                        </div>
                        <div className="coursetrain">
                            {CourseLists.map(Coursedetailse)}
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Education
