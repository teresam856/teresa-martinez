import React, { Component } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';

import { library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import './Footer.css';
library.add(faEnvelope)


class Footer extends Component {
    render() {
        return (
            <Navbar className="justify-content-center border-top bg-transparent" fixed="bottom">
                <Nav>
                    <NavLink href="https://www.linkedin.com/in/teresamartinez8/"><FontAwesomeIcon icon={faLinkedin} /></NavLink>
                    <NavLink href="https://github.com/teresam856"><FontAwesomeIcon icon={faGithub} /></NavLink>
                    <NavLink href="tmartinez@berkeley.edu"><FontAwesomeIcon icon={faEnvelope} /></NavLink>
                </Nav>
            </Navbar>
                
        )
    }
}

export default Footer;