import React from 'react'
import "./Footer.css";
import { NavLink } from 'react-router-dom';
import Socialicon from "./Socialicon";



function Footer() {

    return (
        <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
            <div className="footer">
                <div className="container">
                    <div className="footer-top">
                        <h1 className="footerh1">Front-End Web Developer and SEO Specialist</h1>
                        <h1 className="footerh2">Let's Work Together </h1>
                        <h2 className="footerh3">Have a project you'd like to discuss?</h2>
                        <button className="footerbtn"><NavLink className="footerbutton container" to="/contact" exact> Contact Me</NavLink></button>
                    </div>

                    <div className="footer-bottom">
                        <Socialicon />
                        <div className="copyrightfooter"><h1 className="footerp">Copyright @2021 Developed by Sourav Gupta</h1></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
