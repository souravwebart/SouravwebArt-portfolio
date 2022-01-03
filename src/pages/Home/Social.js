import React from 'react'
import "./Home.css"

function Social() {
    const [state] = React.useState({
        Facebook: "/images/fscebook.png",
        Linkedin: "/images/linkedin.png",
        Instragram: "/images/instragram.png",
        github: "/images/github.png",
    });
    return (
        <div className="social-middle">
        <div><a href="https://www.facebook.com/sguptacoding"><img className="iconimg" src={state.Facebook} alt="Facebook"></img></a></div>
        <div><a href="https://www.linkedin.com/in/souravwebart/"> <img className="iconimg" src={state.Linkedin} alt="linkedin"></img></a></div>
        <div><a href="https://www.instagram.com/souravwebart/"><img className="iconimg" src={state.Instragram} alt="instragram"></img></a></div>
        <div><a href="https://github.com/souravwebart"><img className="iconimg" src={state.github} alt="instragram"></img></a></div>

        </div>
        
    )
}

export default Social
