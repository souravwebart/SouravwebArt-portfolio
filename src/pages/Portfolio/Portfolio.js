import React, {useState} from 'react'
import "../Home/Home.css";
import "./Portfolio.css";
import { NavLink } from 'react-router-dom';
import Portfoliocard from "./Portfoliocard";
import Worklists from "./Worklist";
import "./Animation.css";
import videoBg from './video/sea.mp4';


function PortFoliolist(worklist) {
    return (
        <Portfoliocard
            key={worklist.id}
            title={worklist.title}
            image={worklist.image}
            url={worklist.url}
        />
    )
}
function Portfolio() {
    const [visible, setVisible] = useState(9)
    const showMoreWorks = () => {
        setVisible(prevValue => prevValue + 3);
    };
    const [state] = React.useState({
        FirstTitle: "My",
        LastTitle: " Portfolio",
        Text: "My tasks utilize an immense assortment of most recent innovation Tools. My best experiences are to make NodeJS Backend Projects, PHP backend projects, WordPress Development projects, and React Projects. The following are a portion of my tasks. Note that not the entire portion of the referenced undertakings are on GitHub yet.",
        image: "/images/souravdesign.png",
    })
    return (
        <>
        <video autoPlay loop muted id="video2"><source src={videoBg} type='video/mp4'/></video>
        <div className="portfolio-section">
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
            <div className="portfolio-Top">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 order-1 order-lg-2 hero-img portfolioscreen" data-aos="fade-right">
                            <h1 className="h1-portfolioprimary">{state.FirstTitle}<span className="h1-primarylasttitle">{state.LastTitle}</span></h1>
                            <p className="h2-portfolioprimary">{state.Text}</p>
                            <button className="portfoliobtn"><NavLink className="homebutton container" to="/contact" exact> Contact Me</NavLink></button>
                        </div>
                        <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1 portfolioimg" data-aos="fade-left">
                            <img className="portfoliotopimage" src={state.image} alt="man" />
                        </div>
                    </div>
                </div>
               
                <div className="svgsection1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,32L48,64C96,96,192,160,288,208C384,256,480,288,576,256C672,224,768,128,864,106.7C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="svgsection">
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
                
            </div>
            <div className="Portfoliocarddesign">
                {Worklists.slice(0, visible).map(PortFoliolist)}
            </div>
            <div className="loadmorebutton">
                <button style={{ display: visible >= Worklists.length ? 'none' : 'hidden' }} className="loadmorebtn" onClick={showMoreWorks}>Load More</button>
                </div>
        </div>
        </>

    )
}

export default Portfolio
