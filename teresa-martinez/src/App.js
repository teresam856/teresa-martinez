import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import Components
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';

// Styling Sheets
import './App.css';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
    }
  }
  render() {
    return (
        <div>
            <Router>
              <Navbar collapseOnSelect expand="lg" className="justify-content-end navs" variant="dark" sticky="top" >
                    <Navbar.Brand>
                      <p className="branding">Teresa Martinez</p>
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse  id="responsive-navbar-nav">
                      <Nav className="ml-auto color-nav" >
                          <Nav.Item>
                          <Nav.Link href={process.env.PUBLIC_URL + '/'} >Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                          <Nav.Link href={process.env.PUBLIC_URL + '/about'}>About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                          <Nav.Link href={process.env.PUBLIC_URL + '/resume'}>Experience</Nav.Link>
                          </Nav.Item>
                      </Nav>
                    </Navbar.Collapse>
              </Navbar>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={() =>  <Home />} />
                <Route path={process.env.PUBLIC_URL + '/about'} component={() =>  <About />} />
                <Route path={process.env.PUBLIC_URL + '/resume'} component={() =>  <Resume/>} />
              </Switch>
          </Router>
          <Footer />
        </div>
    );
  }
}

export default App;
