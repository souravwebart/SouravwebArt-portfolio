import React from 'react'
import "./Contact.css";
import videoBg from './video/bg.gif';


function Contact() {
    const [state] = React.useState({
        whatsappimage: "/images/whatsapp.png",
        emailimage: "/images/email.png",
        telegram:"/images/tegram.png",

    });
    return (
        <>
        // <video autoPlay loop muted id="video5"><source src={videoBg} type='video/mp4'/></video>
        <img id="video5" src={videoBg} alt="background"></img>
        <div className="contact">
            <div className="container">
                    <div className="contact-top">
                        <h1 className="contacttoph1">Contact Me</h1>
                        <p className="contacttoptext">If you wanna get in touch, talk to me about a project collaboration feel free to contact me using the below options. I will contact you as soon as possible within 24 to 48 hours.</p>
                    </div>
                    <div className="contactcard">
                        <div className="contact-row">
                            <img className="contactcardimg" src={state.emailimage} alt="email"></img>
                            <h1 className="contactcardh1">For any queries</h1>
                            <p className="contactcardtext">Get Reply within 24-48 Hours</p>
                            <div className="contactcardbtn1">
                            <h2 className="contactcardbutton">Guptasourav536@gmail.com</h2>
                            </div>
                        </div>
                        <div className="contact-row">
                            <img className="contactcardimg" src={state.whatsappimage} alt="WhatsApp"></img>
                            <h1 className="contactcardh1">Talk to me over WhatsApp</h1>
                            <p className="contactcardtext">Get Reply within 24 Hours</p>
                            <div className="contactcardbtn2">
                            <a className="contactcardbuttonanchor" href="https://wa.me/7085548881?text=I%27m%20interested%20in%20your%20web%20development%20service"><h2 className="contactcardbutton">Chat Now</h2></a>
                            </div>
                        </div>
                        <div className="contact-row">
                            <img className="contactcardimg" src={state.telegram} alt="Telegram"></img>
                            <h1 className="contactcardh1">Talk to me over Telegram</h1>
                            <p className="contactcardtext">Get Reply within 24-48 Hours</p>
                            <div className="contactcardbtn3">
                            <a className="contactcardbuttonanchor" href="https://t.me/Souravguptadeveloper"><h2 className="contactcardbutton">Chat Now</h2></a>
                            </div>
                           
                        </div>
                    </div>
                
            </div>

        </div>
        </>
    )
}

export default Contact
