import React from "react";
import {Container, Col , Row } from "react-bootstrap";
import "./container.css";
function Skill(props) {
    var animationProgress=null; 
    // if(props.width > 750){
        window.addEventListener("load", function(){

            // var root = document.createElement(":root");
            // var rootStyles = getComputedStyle(root);
            // var mainColor = rootStyles.getPropertyValue('--main-color');
            // var fentColor = rootStyles.getPropertyValue('--image-background');
            // console.log(mainColor +":"+fentColor);
            // root.style.setProperty('----main-color','green');
            // root.style.setProperty('----image-background','red');
            
                    
                    // HTML
                    const progressBar = document.querySelector("#html");
                    const percentage = document.querySelector("#percentage1");
                    // CSS
                    const css = document.querySelector("#CSS");
                    const cssIn = document.querySelector("#css");
                    // JavaScript
                    const java = document.querySelector("#JavaScript");
                    const javaIn = document.querySelector("#java");
                    // Node.js
                    const node = document.querySelector("#Node");
                    const nodeIn = document.querySelector("#node");
                    // React
                    const react = document.querySelector("#React");
                    const reactIn = document.querySelector("#react");
                    // Bootstrap
                    const boot = document.querySelector("#Boot");
                    const bootIn = document.querySelector("#boot");
                    // Datascience
                    const ds = document.querySelector("#DS");
                    const dsIn = document.querySelector("#ds");
                    // DSA
                    const dsa = document.querySelector("#DSA");
                    const dsaIn = document.querySelector("#dsa");
                     // mongo
                     const mongo = document.querySelector("#MongoDb");
                     const mongoIn = document.querySelector("#mongodb");
        
                    animationProgress = (height,total,vheight) =>{
                        let percent = (height/(total-vheight)) * 100;
                        let t=0;
                        if(percent > 33){
                            var time = setInterval(() => {
                                if(t > 80){
                                    sense.removeEventListener("scroll",hello);
                                    clearInterval(time);
                                }
                                if(t<=50){
                                    // ds
                                    ds.style.width=Math.floor(t)+"%";
                                    dsIn.innerHTML = t + "%"; 
                                    // dsa
                                    dsa.style.width=Math.floor(t)+"%";
                                    dsaIn.innerHTML = t + "%"; 
                                } 
                                if(t<=60){
                                    // css
                                    css.style.width=Math.floor(t)+"%";
                                    cssIn.innerHTML = t + "%"; 
                                    // React
                                    react.style.width=Math.floor(t)+"%";
                                    reactIn.innerHTML = t + "%"; 
                                    // BootStrap
                                    boot.style.width=Math.floor(t)+"%";
                                    bootIn.innerHTML = t + "%";
                                } 
                                 if(t<=72){
                                    // html
                                    progressBar.style.width=Math.floor(t)+"%";
                                    percentage.innerHTML = t + "%";
                                    // java
                                    java.style.width=Math.floor(t)+"%";
                                    javaIn.innerHTML = t + "%"; 
                                    // node
                                    node.style.width=Math.floor(t)+"%";
                                    nodeIn.innerHTML = t + "%"; 
                                } if(t<75){
                                    // mongo
                                    mongo.style.width=Math.floor(t)+"%";
                                    mongoIn.innerHTML = t + "%"; 
                                }
                                
                                t=t+4;
                            }, 40);
                        }
                    }
            function hello(event){
                animationProgress(event.target.scrollTop,event.target.scrollHeight,event.target.clientHeight);
            }
            var sense = document.querySelector(".container1");
            sense.addEventListener("scroll",hello);
            
        })
    // }
    return(
        <div id="skills" className="real-skill">
            <div className="txtHead1">
                <h2>Skills</h2>
            </div>
            <div className="subcontact">
            <Container className="real-contain">
                    <Row className="real-row">
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest">
                        <label className="label" htmlFor="html"><h5>HTML</h5><h5 id="percentage1"></h5></label>
                            <div className="progress-ba" style={{color:"white"}}>
                                <div className="progress-per"id="html"></div>
                            </div> 
                        </div>
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest"> 
                        <label className="label"htmlFor="CSS"><h5>CSS</h5><h5 id="css"></h5></label>
                            <div className="progress-ba" style={{color:"white"}}>
                                
                            <div className="progress-per"  id="CSS"></div>
                            </div> </div>
                       
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest">
                            <label className="label"htmlFor="JavaScript"><h5>JavaScript</h5><h5 id="java"></h5></label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per"  id="JavaScript"></div>
                            </div> </div>
                        
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest"> 
                        <label className="label"htmlFor="react"><h5>React</h5><h5 id="react"></h5></label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per"  id="React"></div>
                            </div> </div>
                       
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest">
                            <label className="label"htmlFor="node"><h5>Node.js</h5><h5 id="node"></h5></label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per"  id="Node"></div>
                            </div> </div>
                        
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest">
                            <label className="label"htmlFor="boot"><h5>BootStrap</h5><h5 id="boot"></h5></label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per"  id="Boot"></div>
                            </div> </div>
                        
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest"> 
                        <label className="label"htmlFor="react"><h5>Data Science</h5><h5 id="ds"></h5></label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per"id="DS"></div>
                            </div>
                         </div>
                       
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest">
                            <label className="label"htmlFor="node"><h5>MongoDb</h5><h5 id="mongodb"></h5></label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per"  id="MongoDb"></div>
                            </div> </div>
                        
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest">
                            <label className="label"htmlFor="boot"><h5>DSA</h5><h5 id="dsa"></h5></label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per"  id="DSA"></div>
                            </div> </div>
                        
                        </Col>
                    </Row>
            </Container>
            <div className="exinfo">
                <h2>Additional Skills</h2>
                <p>I am a versatile full stack developer with a strong focus on enhancing web applications through the integration of machine learning using TensorFlow. My expertise extends to both front-end and back-end development, enabling me to create seamless user experiences while building robust and scalable back-end systems.

One of my core strengths lies in testing, where I excel in both unit and integration testing. This meticulous approach ensures the delivery of high-quality, error-free web applications. Additionally, I have extensive experience in the deployment process, covering various environments such as staging and production. I am well-versed in containerization techniques for efficient and scalable deployment.</p>
            </div>
            </div>
            
        </div>
    )
}

export default Skill;