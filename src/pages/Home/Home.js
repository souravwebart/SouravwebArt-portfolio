import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom';
import Social from "./Social";
import videoBg from './video/bg.gif';



function Home() {
    const [state] = React.useState({
        FirstTitle: "Sourav",
        LastTitle: " Gupta",
        Text: "I am a full-stack web developer, Wordpress Developer and Search Engine Optimization (SEO) specialist. Feel free to take a look at my latest projects on the web portfolio page.",
        image: "/images/sourav1.png",
    });
    return (
        <>
        // <video autoPlay loop muted id="video"><source src={videoBg} type='video/mp4'/></video>
        <img id="video" src={videoBg} alt="background"></img>
        <div className="home-top">
  <div className="animationskilltext">
                        <img src="/images/html.png" alt="html"></img>
                        <img src="/images/css.png" alt="css"></img>
                        <img src="/images/javascript.png" alt="javascript"></img>
                        <img src="/images/boostrap.png" alt="boostrap"></img>
                        <img src="/images/react.png" alt="react"></img>
                        <img src="/images/nodejs.png" alt="node.js"></img>
                        <img src="/images/php.png" alt="php"></img>
                        <img src="/images/mysql.png" alt="mysql"></img>
                        <img src="/images/mongodb.png" alt="mongodb"></img>
                    </div>
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 order-1 order-lg-2 hero-img homescreen" data-aos="fade-left">
                        <h1 className="h1-primary">{state.FirstTitle}<span className="h1-primarylasttitle">{state.LastTitle}</span></h1>
                        <p className="h2-primary">{state.Text}</p>
                        <div><Social /></div>
                        <button className="homebtn"><NavLink className="homebutton container" to="/contact" exact> Contact Me</NavLink></button>
                    </div>
                    <div className=" col-lg-6 py-lg-0 order-2 order-lg-1 homescreenright" data-aos="fade-right">
                        <img className="Hometopimage" src={state.image} alt="man" />

                    </div>
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
        </div>
        </>
    )
}

export default Home
