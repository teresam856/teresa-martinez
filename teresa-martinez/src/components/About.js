import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Gallery from '../components/Gallery';
// import Hero from '../components/Hero';
// import Jumbotron from 'react-bootstrap/Jumbotron';



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
                                <h3 className="display-4 ">Welcome! </h3>
                            </Container>
                            <Container className="content-text ">
                                <Row className="pb-5 pt-5">
                                    <Col sm={7}>
                                        <p>
                                            Hello, I am Teresa Martinez and I am 23 years old. 
                                            I am from Stockton, California. 
                                        </p>
                                        <p>
                                            I studied BioEngineering with a 
                                            concetration in Biomedical Imaging at <b>UC Berkeley</b>. 
                                            During my time at Cal, I played intramural soccer, I was part of the board for the Hispanic 
                                            Engineers and Scientists club, and I was also a lab assistant for the introductory CS course
                                            CS61a. 
                                        </p>
                                    </Col>
                                    <Col sm={5}>
                                        {/* <Image className="picture" width={171} height={180} src={berkeley}/> */}
                                    </Col>
                                    
                                </Row>
                                <Row className="pb-5 pt-5">
                                    <Col sm={5}>
                                        {/* <Image className="picture" width={171} height={180} src={sf} /> */}
                                    </Col>
                                    <Col sm={7}>
                                        <p>
                                            On my free time I enjoy baking, gardening and weight training.
                                            But most recently I have began to enjoy and practive my running.
                                            I like to try new coffee shops, but most often you will find me 
                                            in the comfort of my house drinking a cup of joe while watching
                                            my favorite street food or true crime show.
                                        </p>
                                        <p>
                                            Although I am a homebody, I also love to travel. Exploring new cities is so interesting to me.
                                            I get to try new food stands and I get to meet new people. Some of my favorite cities that I had 
                                            the opportunity to visit were Seattle, Washington DC, and San Francisco. 
                                            Down below you can find some of my favorite pictures from the past years.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="gallery">
                                <Gallery />
                            </Container>
                        </Container>
                </Container>    
        );
    }
}
export default About;