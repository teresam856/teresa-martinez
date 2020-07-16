import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure'
import Hero from '../components/Hero';

import sf from '../images/cities/sf.png';
import berkeley from '../images/cities/berkeley.png';

function Home(props) {
    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle} />
            <Container>
                <Row>
                    <Col>
                        <p>
                            In anim amet labore aliqua sunt nostrud est deserunt. 
                            Minim irure tempor anim tempor enim cillum. 
                            Veniam tempor voluptate sint culpa proident reprehenderit laboris et aliquip eiusmod.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={berkeley}
                            />
                            <Figure.Caption>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <p>
                            Ut qui mollit dolore tempor reprehenderit sit culpa aliquip mollit est sint dolore commodo consectetur. 
                            Et commodo culpa ad deserunt ullamco consectetur. Fugiat ullamco dolore sunt commodo magna sit est do 
                            consectetur consequat commodo eiusmod ut. Eu ex laboris voluptate tempor aliquip id consectetur. 
                            Consequat aute ex tempor excepteur fugiat officia dolore quis eu est Lorem eu.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Ut qui mollit dolore tempor reprehenderit sit culpa aliquip mollit est sint dolore commodo consectetur. 
                            Et commodo culpa ad deserunt ullamco consectetur. Fugiat ullamco dolore sunt commodo magna sit est do 
                            consectetur consequat commodo eiusmod ut. Eu ex laboris voluptate tempor aliquip id consectetur. 
                            Consequat aute ex tempor excepteur fugiat officia dolore quis eu est Lorem eu.</p>
                    </Col>
                    <Col>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={sf}
                            />
                            <Figure.Caption>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Home;