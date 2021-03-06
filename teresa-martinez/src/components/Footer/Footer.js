import React, { Component } from 'react';
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
            <Navbar className="justify-content-center navs-footer pt-3" variant="light" fixed="bottom">
                <Nav>
                    <NavLink href="https://www.linkedin.com/in/teresamartinez8/"><FontAwesomeIcon icon={faLinkedin} /></NavLink>
                    <NavLink href="https://github.com/teresam856"><FontAwesomeIcon icon={faGithub} /></NavLink>
                    <NavLink href="tmartinez@berkeley.edu" disabled>
                        <FontAwesomeIcon icon={faEnvelope} />                        
                    </NavLink>
                </Nav>
            </Navbar>    
        )
    }
}

export default Footer;