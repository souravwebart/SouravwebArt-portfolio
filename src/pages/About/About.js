import React from 'react';
import { NavLink } from 'react-router-dom';

import "../Home/Home.css";
import "./About.css";
import "./Aboutcard";
import "./Carddesign.css";

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099FF" fillOpacity="1" d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,202.7C420,224,480,256,540,266.7C600,277,660,267,720,218.7C780,171,840,85,900,69.3C960,53,1020,107,1080,144C1140,181,1200,203,1260,186.7C1320,171,1380,117,1410,90.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
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
            <div className="container-fluid">
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


    )
}

export default About
