import React, { useState } from "react";
import './container.css';
import { Col, Row,Container } from "react-bootstrap";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
function Contact(){
    var [formData,setFormData] = useState({
        name:'',subject:'',content:''
    });
    // const history = History();
    const handleMail = (event) =>{
        event.preventDefault();
        window.location.href = "mailto:siddh6133@gmail.com?subject="+formData.subject+"&body="+formData.name+formData.content+".";
    }
    const handleChange = (event) =>{
        setFormData({...formData,[event.target.name]:event.target.value});
    };
    return(
        <div id="contact" className="contactMe">
            <div className="txtHead">
                <h2>Contact Me</h2>
                <p>For <span style={{textDecoration:'underline', textDecorationColor:"rgb(199, 222, 20)"}}>Hiring</span> And Buisness Purpose</p>
            </div>
            <div className="contact">
                <Container>
                    <Row>
                        <Col xs={12} md={6} sm={12} className="leftContact">
                        <h2>Email Me</h2>
                        <div className="form">
                            <form onSubmit={handleMail} className="emailForm">
                                <input type="text" name='name' placeholder="Your Name" value={formData.name} onChange={handleChange}  autoComplete="off"/>
                                <input type="text" name='subject' placeholder="Subject" value={formData.subject} onChange={handleChange} autoComplete="off"/>
                                <input type="text-area" name='content' placeholder="Type Message Here" value={formData.content} onChange={handleChange} autoComplete="off"/>
                                <div className="sub"><input type="submit"/></div>
                            </form>
                        </div>
                        </Col>
                        <Col xs={12} md={6} sm={12}>
                        <div className="links">
                            <h2>Let's Talk</h2>
                            <button><FaWhatsapp/>WhatsApp</button>
                            <button><FaLinkedin/>LinkedIn</button>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        
    )
}
export default Contact;