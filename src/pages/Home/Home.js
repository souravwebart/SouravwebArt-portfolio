import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom';
import Social from "./Social";



function Home() {
    const [state] = React.useState({
        FirstTitle: "Sourav",
        LastTitle: " Gupta",
        Text: "I am a full-stack web developer, Wordpress Developer and Search Engine Optimization (SEO) specialist. Feel free to take a look at my latest projects on the web portfolio page.",
        image: "/images/souravguptaprofile2.png",
    });
    return (

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
                    <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1 homescreenright" data-aos="fade-right">
                        <img className="Hometopimage" src={state.image} alt="man" />

                    </div>
                </div>
            </div>
            <div className="Homesvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#444444" fillOpacity="1" d="M0,0L0,32L72,32L72,128L144,128L144,224L216,224L216,192L288,192L288,256L360,256L360,224L432,224L432,160L504,160L504,96L576,96L576,64L648,64L648,128L720,128L720,96L792,96L792,96L864,96L864,160L936,160L936,256L1008,256L1008,96L1080,96L1080,128L1152,128L1152,96L1224,96L1224,128L1296,128L1296,32L1368,32L1368,256L1440,256L1440,320L1368,320L1368,320L1296,320L1296,320L1224,320L1224,320L1152,320L1152,320L1080,320L1080,320L1008,320L1008,320L936,320L936,320L864,320L864,320L792,320L792,320L720,320L720,320L648,320L648,320L576,320L576,320L504,320L504,320L432,320L432,320L360,320L360,320L288,320L288,320L216,320L216,320L144,320L144,320L72,320L72,320L0,320L0,320Z"></path></svg>
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

    )
}

export default Home
