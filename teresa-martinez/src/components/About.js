import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Gallery from '../components/Gallery';
// import Hero from '../components/Hero';
// import Jumbotron from 'react-bootstrap/Jumbotron';

import sf from '../images/cities/sf.png';
import berkeley from '../images/cities/berkeley.png';


import './About.css';

class About extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Container  fluid>
                        <Container>
                            <Row>
                                <Col>
                                    <h3 className="display-4 ">Welcome</h3>
                                    <h5 className="display-5  font-weight-normal">Bienvenidos</h5>
                                </Col>
                            </Row>

                        </Container>
                    

                        <Container>
                            <Row>
                                <Col>
                                    <Figure>
                                        <Figure.Image
                                            width={171}
                                            height={180}
                                            alt="171x180"
                                            src={berkeley}
                                        />
                                    </Figure>
                                </Col>
                                <Col>
                                    <p>
                                    Aliqua est elit fugiat incididunt tempor commodo non culpa voluptate ad Lorem duis. Amet velit quis id dolor. Laboris dolor consequat et adipisicing laborum duis magna do amet amet velit sint aute. Commodo ut pariatur laboris eiusmod esse qui cillum. Nostrud quis incididunt officia in do est laborum do consectetur aute duis voluptate culpa.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>
                                        Aliqua est elit fugiat incididunt tempor commodo non culpa voluptate ad Lorem duis. Amet velit quis id dolor. Laboris dolor consequat et adipisicing laborum duis magna do amet amet velit sint aute. Commodo ut pariatur laboris eiusmod esse qui cillum. Nostrud quis incididunt officia in do est laborum do consectetur aute duis voluptate culpa.
                                    </p>
                                </Col>
                                <Col>
                                    <Figure>
                                        <Figure.Image
                                            width={171}
                                            height={180}
                                            alt="171x180"
                                            src={sf}
                                        />
                                    </Figure>
                                </Col>
                            </Row>
                            <p>----------------------</p>
                            <Row>
                                <Gallery/>
                            </Row>
                        </Container>
                </Container>
            </div>    
        );
    }
}
export default About;