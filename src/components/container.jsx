import React, { useRef } from "react";
import './container.css';
import './mobile.css';
import Home from "./home";
import AboutMe from "./About";
import Skill from "./skills";
import Contact from "./contact";
import CardExample from "./gitcertificate";

export default function Container(props) {
    return (
        <div className="container1" id="#about">
            <Home scWidth={props.scWidth} scHeight={props.scheight}/>
            <AboutMe/>
            <Skill/>
            <CardExample/>
            <Contact/> 
        </div>   
    );
}
