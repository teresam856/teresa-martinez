import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero(props) {
    return (
        <Jumbotron className="jumbotron-fluid" bg="dark" fluid>
            <Container  fluid>
                <Row>
                    <Col>
                        { props.title && <h3 className="display-4 ">{props.title}</h3>}
                        { props.subtitle && <h5 className="display-5  font-weight-normal">{props.subtitle}</h5>}
                        { props.text && <p className="lead font-weight-light"></p>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;