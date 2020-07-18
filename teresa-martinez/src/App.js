import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import Components
import Home from  './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import Footer from './components/Footer';

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
              <Navbar collapseOnSelect expand="lg" className="justify-content-end bg-light"  fixed="top" >
                    <Navbar.Brand>
                      Teresa Martinez
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse  id="responsive-navbar-nav">
                      <Nav className="ml-auto color-nav" >
                          <Nav.Item>
                          <Nav.Link href="/">Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                          <Nav.Link href="/about">About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                          <Nav.Link href="/resume">Experience</Nav.Link>
                          </Nav.Item>
                      </Nav>
                    </Navbar.Collapse>
              </Navbar>
              <Switch>
                <Route exact path='/' component={() =>  <Home />} />
                <Route path='/about' component={() =>  <About />} />
                <Route path='/resume' component={() =>  <Resume/>} />
              </Switch>
          </Router>
          <Footer />
        </div>
    );
  }
}

export default App;
