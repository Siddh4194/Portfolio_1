import React from "react";
import './container.css';
import { Col, Row,Container} from "react-bootstrap";
import { GitHub } from "@mui/icons-material";
function CardExample() {
  return (
    <div id="project" className="certifications">
            <div className="txtHead">
              <h2>See My Projects</h2>
            </div>
            <div className="contact">
              <Container>
                <Row>
                  <Col md={6} xs={12} sm={12}>
                    <div className="colcontain">
                      <h2>  Git Repositories</h2>
                      <a href="https://github.com/Siddh4194"><button><GitHub style={{fontSize:"clamp(5em,2vw,10em)",color:"rgb(229,229,0)"}}/></button></a>
                      {/* <div className="chatinfo">
                      <h4><a href="http://">Chatbot</a></h4>
                      <p>Using the tensorflow Developed a chatbot for the collage to Improve the admission process for the students.</p>
                      </div> */}
                      <div>
                      <h2>Coding WebSites</h2>
                      <div className="colbutton">
                      <a href="https://leetcode.com/SIddh_4194/"><button >LeetCode</button></a>
                      <a href="https://auth.geeksforgeeks.org/user/siddhdvsg"><button >Geeks For Geeks</button></a>
                      </div>
                    </div>
                    </div>
                  </Col>
                  <Col md={6} xs={12} sm={12}>
                    <div className="colcontain ">
                      
                      <div className="projects">
                      <h2>My DiployMents</h2>
                      <h5>Projects have company name Sodd Consultansy</h5>
                        <div className="project">
                          <h3>Created a dedicated event website for our client who operates in the event business. to see <a href="https://shri-swami-samartha.vercel.app/">click here</a>.</h3>
                        </div>
                        <div  className="project">
                          <h3>A comprehensive dashboard has been developed to provide website owners with insightful analysis. Additionally, an admin dashboard has been designed to offer administrators a comprehensive view. to see <a href="https://sodd-dash-board.vercel.app">click here</a></h3>
                        </div>
                        <h3>Upcomming webSites</h3>
                        <div  className="project">
                          <h3>Developed a chatbot tailored to assist with college admissions by providing answers to common questions</h3>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
    </div>
  );
}

export default CardExample;