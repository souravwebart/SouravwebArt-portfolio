import React, {useState} from 'react'
import "./Nav.css";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faUser,faHome , faAward, faCode, faFileWord, faPhone } from '@fortawesome/free-solid-svg-icons'
const MenuMobileIcon = <FontAwesomeIcon icon={faBars} />
const MenuMobileIconClose = <FontAwesomeIcon icon={faTimes} />

const AboutIcon = <FontAwesomeIcon icon={faUser} />
const HomeIcon = <FontAwesomeIcon icon={faHome} />
const EducationIcon = <FontAwesomeIcon icon={faAward} />
const PortfolioIcon = <FontAwesomeIcon icon={faCode} />
const ServicesIcon = <FontAwesomeIcon icon={faFileWord} />
const ContactIcon = <FontAwesomeIcon icon={faPhone} />




function Navbar() {
  const [open, setOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbarsourav">
    
      <NavLink className="navbar-brand navbar-logo mainlogo" to="/" exact>
      <img className="logoimage" src="/images/Souravguptalogo.png" alt="logo"/>
      </NavLink>
    
    
      <button open={open} onClick={() => setOpen(!open)}
        className="navbar-toggler"
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     {open ? <span className="mobile-menu">{MenuMobileIconClose}</span> : <span className="mobile-menu">{MenuMobileIcon}</span> }
      </button>
 
      <div 
        className="collapse navbar-collapse mobilemenu" id="navbarSupportedContent" >
        <ul className="navbar-nav ml-auto">
        
            
            <li className="nav-item active itemnav">
              <NavLink className="nav-link navtext" to="/" exact>
                <span className="Menuicon">{HomeIcon}</span>Home
              </NavLink>
            </li>

            <li className="nav-item itemnav">
              <NavLink className="nav-link navtext" to="/about" exact>
                <span className="Menuicon">{AboutIcon}</span>About
              </NavLink> 
            </li>
            <li className="nav-item itemnav">
              <NavLink className="nav-link navtext" to="/education" exact>
              <span className="Menuicon">{EducationIcon}</span>Education
              </NavLink>
            </li>
            <li className="nav-item itemnav">
              <NavLink className="nav-link navtext" to="/portfolio" exact>
              <span className="Menuicon">{PortfolioIcon}</span>Portfolio
              </NavLink>
            </li>

            <li className="nav-item itemnav">
              <NavLink className="nav-link navtext" to="/services" exact>
              <span className="Menuicon">{ServicesIcon}</span>Services
              </NavLink>
            </li>
           
            <li className="nav-item itemnav">
              <NavLink className="nav-link navtext" to="/contact" exact>
              <span className="Menuicon">{ContactIcon}</span>Say Hello
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  
    )
}

export default Navbar
