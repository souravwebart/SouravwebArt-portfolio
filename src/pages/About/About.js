import React from 'react';
import { NavLink } from 'react-router-dom';

import "../Home/Home.css";
import "./About.css";
import "./Aboutcard";
import "./Carddesign.css";
import videoBg from './video/bg.gif';


import Aboutcards from './Aboutcard';
import "./Carddesign";
import Carddesign from './Carddesign';

function AboutCardDetails(AboutCard) {
    return (
        <Carddesign
            key={AboutCard.id}
            Name={AboutCard.name}
            img={AboutCard.imgURL}
            text={AboutCard.text}
        />
    )
}

function About() {
    const [state] = React.useState({
        FirstTitle: "About",
        LastTitle: " Me",
        Text: "I am Sourav Gupta, a front-end developer enthusiastic about making the web open to everybody and upholding building open and comprehensive developer networks. I love to share my knowledge and I will do so through this site and other developing sites like Github. I am a Front-end and SEO Specialist on HTML, CSS, Javascript, bootstrap, jquery, and so on. Sometimes when I am not doing coding, you can discover me geeking about photography, attempting new food recipes, and investigating various methods of making content that can assist interested people to pave the way to the coding world.",
        image: "/images/Souravabout.png",

    });
    return (
        <>
        // <video autoPlay loop muted id="video2"><source src={videoBg} type='video/mp4'/></video>
        <img id="video2" src={videoBg} alt="background"></img>
        <div className="About-section">
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
            <div className="container aboutclass">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-12 Aboutscreentop">
                        <h1 className="abouth1">{state.FirstTitle}<span className="h1-primarylasttitle">{state.LastTitle}</span></h1>
                        <img className="Aboutme" src="./images/souravguptaprofile1.png" alt="Sourav Gupta"></img>
                        <p className="abouth2">{state.Text}</p>
                        <button className="aboutbtn"><NavLink className="aboutbutton container" to="/contact" exact> Contact Me</NavLink></button>
                    </div>
                </div>
            </div>
            <div className="container-fluid about-details-section">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-8 order-1 order-lg-2 hero-img Aboutscreen" data-aos="fade-right">
                        <div className="aboutsectioncard">
                            {Aboutcards.map(AboutCardDetails)}
                        </div>
                    </div>
                    <div className=" col-lg-4 py-5 py-lg-0 order-2 order-lg-1 aboutscreenright" data-aos="fade-left">
                        <img className="Abouttopimage" src={state.image} alt="man" />

                    </div>
                </div>
            </div>

          

            <div className="clients-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="client-left-section">
                            <h3 className="client-left-section-text">MY Skill</h3>
                        </div>
                        <div className="tech-slideshow">
                            <div className="mover-1"></div>
                        </div>

                    </div>
                </div>
            </div>
       
        </div>

</>
    )
}

export default About
