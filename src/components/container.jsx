import React, { useRef } from "react";
import './container.css';
import './mobile.css';
import './handle';
import Home from "./home";
import AboutMe from "./About";
import Skill from "./skills";
import Contact from "./contact";
import CardExample from "./gitcertificate";
import Copyrights from "./copyrights";

export default function Container(props) {
    var event = document.querySelector("#cont");
    if(props.scWidth<=650){
        return (
            <div className="container2" id="#about">
                <Home scWidth={props.scWidth} scHeight={props.scheight}/>
                    <AboutMe/>
                    <Skill width={props.scWidth}/>
                <CardExample/>
                <Contact/>
                <Copyrights/>
                {/* <Nav scWidth={props.scWidth}/> */}
            </div>   
        );
    } 
        return (
            <div className="container1" id="cont">
                <Home scWidth={props.scWidth} scHeight={props.scheight}/>
                <AboutMe/>
                <Skill cont={event}/>
                <CardExample/>
                <Contact/> 
                <Copyrights/>
            </div>   
        )
    }