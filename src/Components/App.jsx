import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Home from './Home.jsx';
import Activities from './Activities.jsx';
import Locations from './Locations.jsx'

function App() {
  return (
    <BrowserRouter basename="/mountainstop">
      <div>
        <header>
          <Navbar variant="dark" fixed="top" className="navBar">
            <Container>
              <Navbar.Brand href="#home">
                <Link to="/">
                  <img alt="mountainstoplogo" src="../images/mountainstop.png" className="mountainstop-logo"></img>
                </Link>
              </Navbar.Brand>

              <Nav className="ms-auto navList">
                <NavLink to="/" className="subLink">Home</NavLink>
                <NavLink to="/activities" className="subLink">Activities</NavLink>
              </Nav>
            </Container>
          </Navbar>
        </header>

        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/activities" component={Activities}/>
          <Route path="/locations" component={Locations}/>
        </Switch>

        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin></script>
      </div>
    </BrowserRouter>
  );
}

export default App;