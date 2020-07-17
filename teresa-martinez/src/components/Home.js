import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Typical from 'react-typical';



import './Home.css';
// import {centralValley} from '../images/central_valley.png'
import Jumbotron from 'react-bootstrap/Jumbotron';

class Home extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Container className="main-page">
                <Container className="content-home">
                    <Jumbotron className="bg-transparent">
                        {/* <h3 className="display-4">Hello</h3>
                        <h4 className="display-5">I am Teresa</h4> */}
                        <h1 className="display-6 ">
                            <Typical
                                steps={[
                                    'Hello', 1500,
                                    'Hello, I am Teresa.', 1500,
                                    'I am a software engineer.', 1500,
                                    'I am also a  biomedical engineer.', 1500,
                                    'I am from Stockton, Ca', 1500,
                                    'I love coffee.', 1500,
                                    'I love chocolate.', 1500,
                                    'I love puppies.', 1500,
                                    'and I love the outdoors.', 1500,
                                    'Welcome.', 1500
                                ]}
                            />
                        </h1>
                    </Jumbotron>
                </Container>
            </Container>
        );
    }
}
export default Home;