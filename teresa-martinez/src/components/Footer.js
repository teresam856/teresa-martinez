import React, { Component } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


class Footer extends Component {
    render() {
        return (
            <Navbar className="justify-content-center" fixed="bottom" fluid={true}>
                <Nav>
                    <NavLink href="https://www.linkedin.com/in/teresamartinez8/"><FontAwesomeIcon icon={faLinkedin} /></NavLink>
                    <NavLink href="https://github.com/teresam856"><FontAwesomeIcon icon={faGithub} /></NavLink>
                </Nav>
            </Navbar>
        )
    }
}

export default Footer;