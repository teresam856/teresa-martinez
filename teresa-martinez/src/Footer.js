import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="https://www.linkedin.com/in/teresamartinez8/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/teresam856"><FontAwesomeIcon icon={faGithub} /></a>
            </footer>
        )
    }
}

export default Footer;