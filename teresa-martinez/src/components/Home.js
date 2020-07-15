import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero';



function Home(props) {
    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle}/>
            <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}
export default Home;