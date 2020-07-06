import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Home from  './Home';
import Resume from './Resume';
import About from './About';
import Footer from './Footer';

import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Nav className="justify-content-end Nav" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route exact path='/' component={() =>  <Home name='Teresa' />} />
          <Route path='/about' component={About} />
          <Route path='/resume' component={Resume} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
