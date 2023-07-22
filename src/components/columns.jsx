import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './container.css';
import { FaBootstrap, FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCode, faUsers } from "@fortawesome/free-solid-svg-icons";
function Column(props) {
    return(
    <Container className="skill">
      <Row className="skillRow">
        <Col  md={4} xs={12} sm={12} className="coll"> <div className="card1">
        <div className="expicon"><FontAwesomeIcon icon={faCode}  /></div>
               <h2> Full Stack Web Developer </h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a unde in at molestiae? Quod nisi aliquid ab nostrum alias reiciendis tempore voluptatibus doloribus commodi dolore, vitae totam quidem. Veritatis.</p>
            </div> 
        </Col>
        <Col  md={4} xs={12} sm={12} className="coll"><div className="card1">
        <div className="expicon"><FontAwesomeIcon icon={faBriefcase}  /></div>
        
               <h2>Expirience</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a unde in at molestiae? Quod nisi aliquid ab nostrum alias reiciendis tempore voluptatibus doloribus commodi dolore, vitae totam quidem. Veritatis.</p></div> </Col>
        <Col  md={4} xs={12} sm={12} className="coll"><div className="card1">
            <div className="expicon"><FontAwesomeIcon icon={faUsers}  /></div>
        
               <h2>LeaderShip</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a unde in at molestiae? Quod nisi aliquid ab nostrum alias reiciendis tempore voluptatibus doloribus commodi dolore, vitae totam quidem. Veritatis.</p></div> </Col>
      </Row>
    </Container>
        
    )
}

export default Column;