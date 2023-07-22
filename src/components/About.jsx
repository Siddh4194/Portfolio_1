import React, { forwardRef, useRef } from "react";
import './container.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Column from "./columns";

 function AboutMe(props) {
    const aboutme = useRef();
    return(
        <div id="about" className="about">
            <div className="txtHead">
                <h1>About Me</h1>
            </div>
            <Column/>
        </div>
    )
}

export default AboutMe;