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
            <div class="main-page">
                <div class="elevator-pitch">
                    <Row>
                        <Col>
                            <h3 className="display-4 ">Hello,</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Magna ea nisi veniam consectetur consectetur pariatur dolore. Magna occaecat eiusmod nostrud in nisi est consectetur excepteur laborum incididunt id do commodo. Magna voluptate veniam ipsum incididunt consequat ad ex ad est qui eiusmod Lorem pariatur.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                        <Col>3</Col>
                    </Row>
                </div>
            </div>
            
        );
    }
}
export default Home;