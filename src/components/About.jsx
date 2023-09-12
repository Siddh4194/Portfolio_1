import React from "react";
import './container.css';
import Column from "./columns";
import Skill from "./skills";

 function AboutMe(props) {
    return(
        <div id="about" className="about">
            <div className="txtHead">
                <h2>About Me</h2>
            </div>
            <Column/>
            
        </div>
    )
}

export default AboutMe;