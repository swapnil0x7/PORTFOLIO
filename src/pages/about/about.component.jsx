import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/self.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
    return (
      <div id="about">
        <div className="about">
          <h1 className="pt-4 text-center font-details pb-2">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                  Hi there! I'm <strong>&nbsp;Swapnil Kumar.</strong>
                  <br />
                  A learning enthusiast , grasping and observing patterns in day to day life activities and technological change.
                  <br />
                  Currently I'm a final year undergraduate at Dayananda Sagar college (DSCE) persuing my Bachelor of Engineering from Electronics & Instrumentation. 
                  <br />
                  My Interest lies in the domains of Computer Science, Programming and Web Development and have always aspired to work on projects in these areas. Along with these, I immensely love everything about football and could never stop talking about this game. 
                  <br />
                  I aspire to work in a reputable organisation which provides collaborative and intellectually stimulating experience where I can employ my technical & management skills to bring collaborative growth.
                  <br /> <br />
                  <Col className="d-flex justify-content-centre flex-wrap">
                    <div>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.github.com/swapnil0x7/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/swapnilkumar17/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };

export default About