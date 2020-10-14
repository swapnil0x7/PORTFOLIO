import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import face_picture from "../../assets/img/projects/face3.gif";
import AES from "../../assets/img/projects/aes2.jpg";
import SORT from "../../assets/img/projects/sort2.gif";
import COVID from "../../assets/img/projects/covid2.jpg";
import PYCRYPTO from "../../assets/img/skills/pycrypto.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import ML from "../../assets/img/skills/ml.png";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import PY from "../../assets/img/skills/python.svg";
import JP from "../../assets/img/skills/opencv.png";
import J_NOTE from "../../assets/img/skills/jupytern.png";
import VSCODE from "../../assets/img/skills/vscode.png";
import L_GIT from "../../assets/img/skills/github-api.svg";

import "./projects-timeline.style.css";
const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Face Recognition */}
          <ImageEvent
            date="19/07/2020"
            className="text-center"
            src={face_picture}
            alt="face recognition"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description: </strong>  Have you noticed that Facebook has developed an ability to recognize your friends in your photographs? In the old days, Facebook used to make you to tag your friends in photos by clicking on them and typing in their name. Now as soon as you upload a photo, Facebook tags everyone for you like magic. This is Face Recognition for you!<hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>The algorithm recognize and labels more than just one person at the same time.</li>
                          <li>Implemented K-Nearest Neighbors Algorithm for feature classification from scratch.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={PY}
                                alt="python_img"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={JP}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              OpenCv
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={J_NOTE}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Jupyter Notebook
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://www.github.com/swapnil0x7/"
                  target="_blank"
                >
                  Source Code  (Github Repo.)
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="19/07/2020"
            className="text-center"
            src={AES}
            alt="AES ENCRYPTION TOOL"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> developed a symmetric encryption tool to encrypt and decrypt
messages as well as files in Python. I have used Pycrpto Library available in Python-the Cryptography
tool to implement AES encryptor<hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>Encrypt and Decrypt Files as well as text messages.</li>
                        <li>Used one of the most secure Encyption Cipher.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={PY}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={PYCRYPTO}
                                alt="Pycrpto"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Pycrypto 
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={J_NOTE}
                                alt="Jupyter"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Jupyter Notebook
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://www.github.com/swapnil0x7/"
                  target="_blank"
                >
                  Source Code  (Github Repo.)
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="19/07/2020"
            className="text-center"
            src={SORT}
            alt="Sorting Visualiser"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> • Implemented the famous sorting algorithms and visualized their
functioning using simple React library. The basic idea is to get 
an insight about how these algorithms actually function.<hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Demonstrates the functioning of Popular Sorting Algorithms.</li>
                          <li>Implemented a unique algorithm to create the swapping animation.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github web"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub Hosting
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={VSCODE}
                                alt="VS CODE"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Visual Studio
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://www.github.com/swapnil0x7/"
                  target="_blank"
                >
                  Source Code  (Github Repo.)
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="19/07/2020"
            className="text-center"
            src={COVID}
            alt="Covid-19 Outbreak Prediction"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Used Scikit-learn to implement Machine Learning algorithms -
polynomialregression and SVM to track and predict the
worldwide rate of increase of covid cases using a real time API<hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Implemented Polynomial Regression for prediction.</li>
                          <li>Real-time API calls for Datasets</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={ML}
                                alt="ML"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Machine Learning
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={PY}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={J_NOTE}
                                alt="jupyter"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Jupyter Notebook
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://www.github.com/swapnil0x7/"
                  target="_blank"
                >
                  Source Code  (Github Repo.)
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
