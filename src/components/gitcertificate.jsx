import React from "react";
// import './dev.css';
import './container.css';
import { Col, Row,Container } from "react-bootstrap";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
function CardExample() {
  return (
    <div id="certificate" className="bo">
            <div className="animate">
                <div className="static">I'm</div>
                <ul className="dynamic">
                    <li><span>DEveloper</span></li>
                    <li><span>Full</span></li>
                    <li><span>React</span></li>
                    <li><span>Node</span></li>
                </ul>
            </div>
    </div>
  );
}

export default CardExample;