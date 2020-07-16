import React from 'react';

import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './Resume.css';

function Resume(props) {
    return (
        <Container  fluid>
            <Container>
                <Row>
                    <Col>
                        <h3 className="display-4 ">Experience</h3>
                        <h5 className="display-5  font-weight-normal">Frameworks and Languages</h5>
                    </Col>
                </Row>
                 <Row>
                    <Col>
                        <h3>Professional Experience </h3>
                        <CardDeck>
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Header>Capital One</Card.Header>
                                <Card.Body>
                                <Card.Title>Associate Software Engineer</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Header>UC Berkeley</Card.Header>
                                <Card.Body>
                                <Card.Title>Research Assistant</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Resume</h3>
                        <p>
                            Deserunt anim consequat voluptate nisi proident excepteur amet cillum voluptate anim eu est enim in. Ut dolor consectetur irure officia elit mollit quis qui commodo veniam ea qui. Incididunt qui aliquip anim ut. Amet proident sint ad anim aute anim esse officia est nostrud nostrud. Irure eiusmod nulla dolore cillum cillum nisi amet magna dolor laborum esse ex nulla nisi. Officia cillum laborum ea nisi occaecat excepteur commodo eu ipsum minim ea reprehenderit. Nisi sit adipisicing duis dolore reprehenderit id in fugiat laboris laborum pariatur in.
                        </p>
                        <p>
                            Deserunt anim consequat voluptate nisi proident excepteur amet cillum voluptate anim eu est enim in. Ut dolor consectetur irure officia elit mollit quis qui commodo veniam ea qui. Incididunt qui aliquip anim ut. Amet proident sint ad anim aute anim esse officia est nostrud nostrud. Irure eiusmod nulla dolore cillum cillum nisi amet magna dolor laborum esse ex nulla nisi. Officia cillum laborum ea nisi occaecat excepteur commodo eu ipsum minim ea reprehenderit. Nisi sit adipisicing duis dolore reprehenderit id in fugiat laboris laborum pariatur in.
                        </p>
                        <p>
                            Deserunt anim consequat voluptate nisi proident excepteur amet cillum voluptate anim eu est enim in. Ut dolor consectetur irure officia elit mollit quis qui commodo veniam ea qui. Incididunt qui aliquip anim ut. Amet proident sint ad anim aute anim esse officia est nostrud nostrud. Irure eiusmod nulla dolore cillum cillum nisi amet magna dolor laborum esse ex nulla nisi. Officia cillum laborum ea nisi occaecat excepteur commodo eu ipsum minim ea reprehenderit. Nisi sit adipisicing duis dolore reprehenderit id in fugiat laboris laborum pariatur in.
                        </p>
                        <a href={process.env.PUBLIC_URL + '/images/resume_test.pdf'} target="_blank" dowload><Button>Download</Button></a>

                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Resume;