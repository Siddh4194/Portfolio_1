import React from "react";
import {Container, Col , Row, ProgressBar } from "react-bootstrap";
import "./container.css";
function Skill(props) {
    return(
        <div id="skills" className="real-skill">
            <div className="txtHead">
                <h1>Skills</h1>
            </div>
            <Container className="real-contain">
                    <Row className="real-row">
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest">
                        <label htmlFor="html">HTML</label>
                            <div className="progress-ba" style={{color:"white"}}>
                                <div className="progress-per"style={{width:"70%"}} id="html"></div>
                            </div> 
                        </div>
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest"> <label htmlFor="CSS">CSS</label>
                            <div className="progress-ba" style={{color:"white"}}>
                                
                            <div className="progress-per" style={{width:"65%"}} id="CSS"></div>
                            </div> </div>
                       
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest"><label htmlFor="JavaScript">JavaScript</label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per" style={{width:"75%"}} id="JavaScript"></div>
                            </div> </div>
                        
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest"> <label htmlFor="react">React.js</label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per" style={{width:"65%"}} id="react"></div>
                            </div> </div>
                       
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest"><label htmlFor="node">Node.js</label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per" style={{width:"70%"}} id="node"></div>
                            </div> </div>
                        
                        </Col>
                        <Col xs={6} md={4} sm={4}> 
                        <div className="skilltest"><label htmlFor="boot">BootStrap</label>
                            <div className="progress-ba" style={{color:"white"}}>
                            <div className="progress-per" style={{width:"50%"}} id="boot"></div>
                            </div> </div>
                        
                        </Col>
                    </Row>
            </Container>
            <div className="exinfo">
                <h2>Additional Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat, quas culpa quibusdam quis itaque nostrum cumque nam consequuntur iure quod, similique non corporis saepe voluptate blanditiis dolores quam at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae reiciendis nam officia a nemo quia, quos dolore hic inventore, quae tempora, ad veniam blanditiis? Deserunt eveniet provident nemo consequuntur culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat, quas culpa quibusdam quis itaque nostrum cumque nam consequuntur iure quod, similique non corporis saepe voluptate blanditiis dolores quam at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae reiciendis nam officia a nemo quia, quos dolore hic inventore, quae tempora, ad veniam blanditiis? Deserunt eveniet provident nemo consequuntur culpa.</p>
            </div>
        </div>
    )
}

export default Skill;