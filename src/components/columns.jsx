import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './container.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCode, faUsers } from "@fortawesome/free-solid-svg-icons";
function Column(props) {
    return(
      <div className="subcontact">
        <Container className="skill">
      <Row className="skillRow">
        <Col  md={4} xs={12} sm={12} className="coll"> <div className="card1">
        <div className="expicon"><FontAwesomeIcon icon={faCode}  /></div>
               <h2> Full Stack Web Developer </h2>
               <p>Over the past year, I've pursued full-stack development, creating multiple projects. These encompassed diverse technologies, including TensorFlow for machine learning, MongoDB as a database, and REST APIs, enhancing my skills. Projects used basic languages like CSS. Upcoming projects will feature productivity-boosting frameworks, further advancing my expertise as a full-stack developer.</p>
            </div> 
        </Col>
        <Col  md={4} xs={12} sm={12} className="coll"><div className="card1">
        <div className="expicon"><FontAwesomeIcon icon={faBriefcase}  /></div>
        
               <h2>Expirience</h2>
               <p>I've developed a comprehensive library management system that goes beyond the basics, involving extensive SQL analysis. Additionally, I've created a machine learning-based chatbot for our college using TensorFlow. My experience extends to building and maintaining full-stack web applications, employing JavaScript, React, Node.js, and MongoDB. I've prioritized user-friendly and visually appealing UI design while building robust and scalable back-end systems.</p></div> </Col>
        <Col  md={4} xs={12} sm={12} className="coll"><div className="card1">
            <div className="expicon"><FontAwesomeIcon icon={faUsers}  /></div>
        
               <h2>LeaderShip</h2>
               <p>I hold the position of <span className="span">Vice-President of department</span>, where I lead various initiatives such as CodeHack, Game Fever, and Quick Web. I am actively involved in training junior members and have led several academic projects as a team leader.</p></div> </Col>
      </Row>
    </Container>
      </div>
    
        
    )
}

export default Column;