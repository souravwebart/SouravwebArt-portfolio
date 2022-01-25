import React from 'react'
import "../Home/Home.css";
import "./Services.css";
import { NavLink } from 'react-router-dom';
import Servicelists from "./Servicelist";
import Servicesection from "./Servicesection";
import videoBg from './video/bg.gif';


function servicedetails(Servicelist){
    return(
        <Servicesection
        key={Servicelist.id}
        image={Servicelist.image}
        title={Servicelist.title}
        description={Servicelist.details}
        />
    )

}

function Services() {
    const [state] = React.useState({
        Images: "./images/souravgupta4.jpg",
    })
    return (
        <>
        <div className="inner-page-banner inner-page-banner-bg">
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
                        <img src="/images/javascript.png" alt="javascript"></img>

                        
                    </div>
            <div className="container" id="ecommercetop">
                <div className="banner-inr">
                    <div className="row" >
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 banner-left-content">
                            <h1 className="textheading">WEBSITE DESIGN & DEVELOPMENT SERVICES</h1>
                            <p className="servicestext">Are you planning to expand your business by reaching out to your customers online? I create successful responsive websites that are fast, easy to use, and built with best practices. Responsive websites built for an optimal user experience that achieves your business goals. I will help you make your business come true.
You can contact me if you have any types of web developing projects or search engine optimization (SEO) related projects. I will try my best to give you the best business reach online.</p>
                                
                                <div className="servicestop">
                                <button className="servicesbtn"><NavLink className="homebutton container" to="/contact" exact> Contact Me</NavLink></button>
                                <button className="servicesbtn"><NavLink className="homebutton container" to="/portfolio" exact> See Work</NavLink></button>
                                </div>
              
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 banner-right-image pull-right" id="ecom-rightside">
                        <div className="e-comm-fixed-width">
                        <img src={state.Images} className="ecommerceimage" alt="eCommerce website design"/> 
                        </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="svgsection4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,32L48,64C96,96,192,160,288,208C384,256,480,288,576,256C672,224,768,128,864,106.7C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="svgsection3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0A2B46" fillOpacity="1" d="M0,288L26.7,282.7C53.3,277,107,267,160,266.7C213.3,267,267,277,320,245.3C373.3,213,427,139,480,122.7C533.3,107,587,149,640,160C693.3,171,747,149,800,165.3C853.3,181,907,235,960,256C1013.3,277,1067,267,1120,234.7C1173.3,203,1227,149,1280,112C1333.3,75,1387,53,1413,42.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
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
         
<div className="Servicecarddesign">
{Servicelists.map(servicedetails)}
</div>

        </div>
        </>

    )
}

export default Services
