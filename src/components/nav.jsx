import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLightbulb, faPhone, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-bootstrap";
export default function Nav(){
    return(
        <div className="yes">
        <div className="nav-icon">
        <NavLink href="#home"><FontAwesomeIcon icon={faHouse}/></NavLink>
        </div>
        <div className="nav-icon">
        <NavLink href="#about"><FontAwesomeIcon icon={faUserAlt}/></NavLink>
        </div>
        <div className="nav-icon">
        <NavLink href="#skills"><FontAwesomeIcon icon={faLightbulb}  /></NavLink>
        </div>
        <div className="nav-icon">
        <NavLink href="#contact"><FontAwesomeIcon icon={faPhone}/></NavLink>
        </div>
      </div>
    )
}