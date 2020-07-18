import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';

import './Resume.css';

function Resume() {
    return (
            <Container  className="main-page" fluid>
                <Container className="content-about parent" fluid>
                    <Container className="header ">
                        <Row>
                            <Col >
                                <h3 className="display-4 ">Experience</h3>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="content-text border-top">
                        <h4 className="display-5  font-weight-normal pb-3">Professional Experience</h4>
                        <Row>
                            <Col>
                                
                                <h6>Capital One</h6>
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
                       <Container className="content-text border-top">
                        <Row className="chunks">
                            <Col>
                                <h5 className="display-5  font-weight-normal">Languages</h5>
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
                                <h5 className="display-5  font-weight-normal">Frameworks</h5>
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
                                <h5 className="display-5  font-weight-normal">Tools</h5>
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
                    <Container className="resume border-top">
                        <h5 className="display-5  font-weight-normal">Contact Me!</h5>
                        <Row>
                            <Col>
                                <p>For more details, feel free to reach me at <b>tmartinez@berkeley.edu </b></p>
                            </Col>
                        </Row>
                        <h5 className="display-5  font-weight-normal">Dowload My Resume!</h5>
                        <Row>
                            <Col>
                                For a pdf version of my resume, download: {' '}   
                                <a href={process.env.PUBLIC_URL + '/images/resume_test.pdf'} target="_blank" dowload>
                                    here
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>    
    );
}
export default Resume;