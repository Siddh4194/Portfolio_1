import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHouse, faLightbulb, faPhone, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-bootstrap";
export default function Nav(props){
  if(props.scWidth<=650){
    return(
        <div className="nav-mobile">
          {/* <div className="nav-icon">
          <NavLink href="#home"><FontAwesomeIcon icon={faHouse}/></NavLink>
          </div>
          <div className="nav-icon">
          <NavLink href="#about"><FontAwesomeIcon icon={faUserAlt}/></NavLink>
          </div>
          <div className="nav-icon">
          <NavLink href="#skills"><FontAwesomeIcon icon={faLightbulb}  /></NavLink>
          </div>
          <div className="nav-icon">
          <NavLink href="#contact"><FontAwesomeIcon icon={faBook}/></NavLink>
          </div>
          <div className="nav-icon">
          <NavLink href="#contact"><FontAwesomeIcon icon={faPhone}/></NavLink>
          </div> */}
      </div>
    )} else{
      return(
      <div className="yes1">
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
        <NavLink href="#project"><FontAwesomeIcon icon={faBook}/></NavLink>
        </div>
        <div className="nav-icon">
        <NavLink href="#contact"><FontAwesomeIcon icon={faPhone}/></NavLink>
        </div>
      </div>);
    }
}