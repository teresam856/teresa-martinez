import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


import Gallery from '../Gallery/Gallery';
import me3 from '../../images/me3.png'

// Styling sheets
import './About.css';

class About extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }
    render() {
        return (
                <Container  className="main-page-about" fluid>
                        <Container className="content-about parent" fluid>
                            <Container className="header-about">
                                <h3 className="titles display-4 ">Welcome! </h3>
                            </Container>
                            <Container className="content-text border-top border-dark pt-5">
                                <Row >
                                    <Col sm={4}>
                                        <Image  className="img-responsive center-block" width={200} height={200} src={me3} roundedCircle/>
                                    </Col>
                                    <Col sm={8}>
                                        <p>
                                            Hello, I am Teresa Martinez and I am 23 years old. 
                                            I am from Stockton, California. 
                                        </p>
                                        <p>
                                            I studied BioEngineering with a 
                                            concetration in Biomedical Imaging at <b>UC Berkeley</b>. 
                                            During my time at Cal, I played intramural soccer, I was part of the board for the Hispanic 
                                            Engineers and Scientists club, and I was also a lab assistant for the introductory progamming course
                                            CS61a. 
                                        </p>
                                        <p>
                                        On my free time I enjoy baking, gardening and weight training.
                                        But most recently I have begun to work on my running.
                                        I also like to try new coffee shops and watch cooking channels.
                                    </p>
                                    <p>
                                        Down below you can find some of my favorite pictures from the past years.
                                    </p>
                                    </Col>
            
                                </Row>
                            </Container>
                            <Container className="gallery border-top border-dark pt-5">
                                <Gallery />
                            </Container>
                        </Container>
                </Container>    
        );
    }
}
export default About;