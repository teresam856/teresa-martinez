import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid" fluid>
            <Container fluid={true}>
                <Row className="justify-content-lg-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        { props.subtitle && <h2 className="display-6 font-weight-normal">{props.subtitle}</h2>}
                        { props.text && <p className="lead font-weight-light"></p>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;