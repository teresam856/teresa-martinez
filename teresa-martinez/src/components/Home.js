import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure'
// import Hero from '../components/Hero';



import './Home.css';

class Home extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Container className="main-page" fluid>
                <Container className="content-home">
                    <Container className="elevator-pitch">
                            <div>
                                <h3 className="display-4 ">Hello</h3>
                                <h5 className="display-5  font-weight-normal">I am Teresa</h5>
                            </div>
                            <div>   
                                <p>
                                    I am a software engineer and bioengineer from Stockton, Ca. 
                                </p>
                            </div>
                    </Container>
                </Container>
            </Container>
        );
    }
}
export default Home;