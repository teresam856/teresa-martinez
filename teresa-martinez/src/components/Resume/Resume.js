import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';


import './Resume.css';

function Resume() {
    return (
            <Container  className="main-page-resume" fluid>
                <Container className="content-resume" fluid>
                    <Container className="header-resume">
                        <Row>
                            <Col >
                                <h3 className="display-4 titles">Experience</h3>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="content-text border-top border-dark">
                        <h4 className=" subtitles display-5  font-weight-normal pb-3">Professional Experience</h4>
                        <Row>
                            <Col>
                                
                                <h6 >Capital One</h6>
                                <h8>Associate software engineer</h8>
                                <p>
                                    As a software engineer  for the <b>Center for Machine Learning at Capital One</b>,
                                    I was primarily responsible for supporting, developing and releasing new features for the Solution Progression Pipeline.
                                    During that time, I was able to work with many frameworks and technologies such as 
                                    AWS, Jenkins, Flask, and Groovy. I built an AWS lamda monitor, deployed our Flask microserivices
                                    to AWS EC2, and modified groovy files to enhance our user's experience with the pipeline.
                                </p>
                                <h8>Feb 2019 - Mar 2020 | Vienna, VA </h8>

                            </Col>
                            <Col>
                                
                                <h6>Capital One</h6>
                                <h8>CODA software engineer</h8>
                                <p>
                                    As a software engineer in <b>Capital One Developer's Academy</b> program,
                                    I learned web development skills that allowed me to build MVC applications and Restful 
                                    CRUD APIs using React, Angular, Express, Postgress, HTML, and CSS. We used Jira, 
                                    confluence and Github to plan and communicate with other teams. Tested the applications
                                    using Mocha and Chai.
                                </p>
                                <p>
                                    Project:{' '} <a href="https://elegant-hodgkin-f79765.netlify.app/?fbclid=IwAR0HKzMoh8Pvm8njaynyQz1XopfDDZ3xWnQAdeInuBrhLCocT1H88HtVhe4" >
                                    SETS
                                </a>
                                </p>
                                <h8>Jul 2018 - Jan 2019 | Vienna, VA </h8>

                            </Col>
                            <Col>
                                <h6>UC Berkeley</h6>
                                <h8>Research Assistant</h8>
                                <p>
                                    As a research assistant for the department of <b>Nuclear Engineering at UC Berkeley</b>, 
                                    I assisted in the design of a database for the storage of nuclear engineering material information. 
                                    This information would later be used in the creation of Ashby maps.
                                </p>
                                <h8>Sept 2015 - May 2016 | Berkeley, CA </h8>
                            </Col>
                        </Row>
                       </Container>
                       <Container className="pt-3 pb-3 border-top border-dark mt-1">
                        <Row >
                            <Col>
                                <h5 className="subtitles display-5  font-weight-normal">Languages</h5>
                                <ul>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                    <li>Java</li>
                                    <li>SQL</li>
                                    <li>Groovy</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </Col>
                            <Col>
                                <h5 className="subtitles display-5  font-weight-normal">Frameworks</h5>
                                <ul>
                                    <li>Flask</li>
                                    <li>Express</li>
                                    <li>React</li>
                                    <li>Angualr</li>
                                    <li>PSQL</li>
                                    <li>JQuery</li>
                                    <li>Boostrap</li>
                                    <li>SASS</li>
                                </ul>
                            </Col>
                            <Col>
                                <h5 className=" subtitles display-5  font-weight-normal">Tools</h5>
                                <ul>
                                    <li>AWS</li>
                                    <li>Git</li>
                                    <li>Jenkins</li>
                                    <li>Jira</li>
                                    <li>Confluence</li>
                                    <li>Docker</li>
                                    <li>Mocha</li>
                                    <li>Chai</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="resume border-top border-dark pb-5">
                        <h5 className="subtitles display-5  font-weight-normal">Contact Me!</h5>
                        <Row className="pt-1">
                            <Col> 
                            
                                    <li>
                                        Email: {' '} tmartinez@berkeley.edu
                                    </li>
                                    <li>
                                        LinkedIn: {' '} <a href="https://www.linkedin.com/in/teresamartinez8/" alt="linkedIn">connect with me!</a>
                                    </li>
                                    <li>
                                        Github: {' '} <a href="https://github.com/teresam856" alt="github">Github Account</a>
                                    </li>
                            </Col>
                            
                        </Row>
                    </Container>
                </Container>
            </Container>    
    );
}
export default Resume;