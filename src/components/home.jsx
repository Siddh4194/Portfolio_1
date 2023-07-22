import React from "react";
import  '../images/image.jpg';
import './mobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook,FaTwitter,FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { GifTwoTone, GitHub, GiteRounded, GiteSharp } from "@mui/icons-material";


export default function Home(props){
   if (props.scWidth <= 600) {
    return(
        <div id="home" className="home-mobile">
            
            <div className="image-mobile">
            </div>
            <div className="name-mobile">
                <h1>Hello<br/>I<span style={{color:"rgb(199, 222, 20)"}}>'</span>m Siddhant</h1>
                    <h5>I'm Developer</h5>
                    <p>My Name Is Siddhant Dhanaji Kadam.<br/>I am  <span style={{textDecoration:'underline', textDecorationColor:"rgb(199, 222, 20)"}}>Full Stack Developer</span><br/> & Enthusiastic for Web Design. Coding Is Daily Food.</p>
                    <div className="cv-mobile">
                <a href="../Document/siddhant kadam(Full Stack Developer).pdf" download>
                    <button>Download Cv</button>
                </a>
                    <button id="roundone">Talk</button>
                </div>
                    <div className="social-mobile">
                        <div className="icons-mobile">
                            <FaFacebook href="https://www.facebook.com/siddhant.kadam.794/"/>
                            <FaTwitter href="https://twitter.com/Siddhan08877951"/>
                            <FaInstagram/>
                            <FaLinkedinIn href="https://www.linkedin.com/in/siddhant-kadam-963977222/"/>
                            <GitHub/>
                        </div>
                    </div>
            </div>
        </div>
    )
   }
   else{
    return(
        <div id="home" className="home">
        <div className="social-media">
            <div className="icons">
                <a href=""><FaFacebook/></a>
                <a href=""><FaTwitter/></a>
                <a href=""><FaInstagram/></a>
                <a href=""><FaLinkedinIn/></a>
            </div>
        </div>
            <div className="image">
            </div>
            <div className="name">
                <h1>Hello<br/>I<span style={{color:"rgb(199, 222, 20)"}}>'</span>m Siddhant</h1>
                <h5>I'm Developer</h5>
                <p>My Name Is Siddhant Dhanaji Kadam.<br/>I'm  <span style={{textDecoration:'underline', textDecorationColor:"rgb(199, 222, 20)"}}>Full Stack Developer</span> & <span style={{textDecoration:'underline', textDecorationColor:"rgb(199, 222, 20)"}}>Enthusiastic for Web Design.</span> Coding Is Daily Food.</p>
                <div className="cv">
                <a href="../Document/siddhant kadam(Full Stack Developer).pdf" download>
                    <button>Download Cv</button>
                </a>
                    <button type="button">Talk</button>
                </div>
            </div>
            <div className="sidebar">
                <h3>It's React Web Site</h3>
            </div>
        </div>
    )
   }
    
}