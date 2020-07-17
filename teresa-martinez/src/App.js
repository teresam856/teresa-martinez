import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

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
      title: "Teresa Martinez",
      // navLinks: [
      //   {title: "Home", path: "/"},
      //   {title: "About", path: "/about"},
      //   {title: "Resume", path:"/resume"},
      //   {title: "Contact", path: "/contact"}
      // ],
      home: {
        title: 'Welcome!',
        subtitle: "Bienvenidos!"
      },
      about: {
        title: 'About Me',
        subtitle: "Conoceme un poco mas"
      },
      resume: {
        title: 'Experience',
        subtitle: "Resume"
      }

    }
  }
  render() {
    return (
        <div>
            <Router>
              <Navbar collapseOnSelect expand="lg" className="color-nav justify-content-end" fixed="top" >
                    <Navbar.Brand>
                      Teresa Martinez
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="ml-auto" >
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
                <Route exact path='/' component={() =>  <Home title={this.state.home.title} subtitle={this.state.home.subtitle} name='Teresa' />} />
                <Route path='/about' component={() =>  <About title={this.state.about.title} subtitle={this.state.about.subtitle} />} />
                <Route path='/resume' component={() =>  <Resume title={this.state.resume.title} subtitle={this.state.resume.subtitle} />} />
              </Switch>
          </Router>
          <Footer />
        </div>
    );
  }
}

export default App;
