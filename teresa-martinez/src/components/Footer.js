import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


class Footer extends Component {
    render() {
        return (
            <footer>
                <Row className="border-top" >
                    <Col >
                        <a href="https://www.linkedin.com/in/teresamartinez8/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/teresam856"><FontAwesomeIcon icon={faGithub} /></a>
                    </Col>
                </Row>
            </footer>
        )
    }
}

export default Footer;