import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

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
                <Container  className="main-page" fluid>
                        <Container className="content-about parent" fluid>
                            <Container className="header ">
                                <h3 className="display-4 ">Welcome</h3>
                                <h5 className="display-5  font-weight-normal">Bienvenidos</h5>
                            </Container>
                            <Container className="content-text">
                                <Row className="chunks">
                                    <Col sm={8}>
                                        <p>In consectetur voluptate eiusmod occaecat quis. Ex adipisicing commodo cillum ipsum sint. Dolor proident elit dolore do dolor.</p>
                                    </Col>
                                    <Col sm={4}>
                                        <Image className="picture" src={berkeley} rounded />
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    <Col sm={4}>
                                        <Image className="picture" src={sf} rounded />
                                    </Col>
                                    <Col sm={8}><p>Anim consectetur excepteur laborum labore minim. Sint pariatur qui deserunt adipisicing aliquip dolore nulla ad. Sit ea eu ea Lorem eu est commodo. Reprehenderit do mollit consequat proident ad mollit deserunt irure consectetur commodo id. Sunt cupidatat ea eiusmod laboris non deserunt et commodo mollit.</p></Col>
                                </Row>
                            </Container>
                            <Container className="gallery">
                                {/* <Gallery /> */}
                            </Container>
                        </Container>
                </Container>    
        );
    }
}
export default About;