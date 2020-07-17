import React from 'react';

import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import './Resume.css';

function Resume(props) {
    return (
            <Container  className="main-page" fluid>
                <Container className="content-about parent" fluid>
                    <Container className="header ">
                        <h3 className="display-4 ">Experience</h3>
                    </Container>
                    <Container className="content-text">
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
                                    <li>Boostrap and SASS</li>
                                </ul>
                            </Col>
                            <Col>
                                <h5 className="display-5  font-weight-normal">Tools</h5>
                                <ul>
                                    <li>Jenkins</li>
                                    <li>AWS</li>
                                    <li>Git</li>
                                    <li>Jira</li>
                                    <li>Docker</li>
                                    <li>Mocha/Chai</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className="display-5  font-weight-normal">Professional Experience</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                
                                <h6>Capital One</h6>
                                <h8>Associate software engineer</h8>
                                <p>
                                    As a software engineer  for the <b>Center for Machine Learning at Capital One</b>,
                                    I was primarily responsible for supporting and developing new features for the Solution Progression Pipeline.
                                    During my time at Capital One I developed features for our Model Progression Flask Microservice,
                                    worked with AWS to deploy an agent lambda monitor, and served as the release engineer on several occasions. 
                                </p>
                                <h8>July 2018-March 2020</h8>

                            </Col>
                            <Col>
                                <h6>UC Berkeley</h6>
                                <h8>Research Assistant</h8>
                                <p>
                                    As a research assistant for the department of <b>Nuclear Engineering at UC Berkeley</b>, 
                                    I assited in the design of a database to store nuclear engineering materials that 
                                    would later be used in the creation of Ashy maps.
                                </p>
                                <h8>From September 2015 - May 2016</h8>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="resume">
                        <Row>
                            <Col>
                                <p>For more details, feel free to reach me at <b>tmartinez@berkeley.edu </b></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                For a pdf version of my resume download down:   
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