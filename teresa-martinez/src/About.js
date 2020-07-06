import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>A little more about me</Col>
                </Row>
                <Row>
                    <Col sm={8}>my bio</Col>
                    <Col sm={4}>some photos of activities</Col>
                </Row>
            </Container>
        )
    }
}
export default About;