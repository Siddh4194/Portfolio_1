import React from "react";
import  '../images/image.jpg';
import './mobile.css';
import { FaFacebook,FaTwitter,FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {GitHub} from "@mui/icons-material";
import Resume from "../Document/Resume.pdf";
import { NavLink } from "react-bootstrap";
export default function Home(props){
    // const onButtonClick = () => {
    //     fetch(Resume).then((response) => {
    //       response.blob().then((blob) => {
    //         const fileURL = window.URL.createObjectURL(blob);
    //         let alink = document.createElement("a");
    //         alink.href = fileURL;
    //         alink.download = Resume;
    //         alink.click();
    //       });
    //     });
    //   };
    

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
                    <a href={Resume} download="Resume">
                        <button id="down">Download Cv</button>
                    </a>
                    <NavLink href="#contact" id="roundone"><button>Let's Talk</button></NavLink>
                </div>
                    <div className="social-mobile">
                        <div className="icons-mobile">
                            <a href="https://www.facebook.com/siddhant.kadam.564/"><FaFacebook/></a>
                            <a href="https://twitter.com/Siddhan08877951"><FaTwitter/></a>
                            <a href="https://www.instagram.com/sidd.d.kadam/"><FaInstagram/></a>
                            <a href="https://github.com/Siddh4194/"><GitHub/></a>
                            <a href="https://www.linkedin.com/in/siddhant-kadam-963977222/"><FaLinkedinIn/></a>
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
                <a href="https://www.facebook.com/siddhant.kadam.564/"><FaFacebook/></a>
                <a href="https://twitter.com/Siddhan08877951"><FaTwitter/></a>
                <a href="https://www.instagram.com/sidd.d.kadam/"><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/siddhant-kadam-963977222/"><FaLinkedinIn/></a>
                <a href="https://github.com/Siddh4194"><GitHub/></a>
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
                    <NavLink href="#contact"><button type="button">Let's Talk</button></NavLink>
                </div>
            </div>
            <div className="sidebar">
                <h3>It's React Web Site</h3>
            </div>
        </div>
    )
   }
    
}