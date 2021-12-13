import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Home from './Home';
import Locations from './Locations';

import ReviewPage from './ReviewPage';
import Weather from './Weather';
import Rental from './Rental';

import locations from './../data/locations.json';

function App() {
  const [locationName, setLocationName] = useState('');
  const getLocationName = (locationName) => {
    setLocationName(locationName)
  }
  return (
    <BrowserRouter basename="/mountainstop">
      <div>
        <header>
          <Navbar variant="dark" fixed="top" className="navBar">
            <Container>
              <Navbar.Brand href="#home">
                <Link to="/">
                  <img alt="mountainstoplogo" src="../images/activities/mountainstop.png" className="mountainstop-logo"></img>
                </Link>
              </Navbar.Brand>

              <Nav className="ms-auto navList">
                <NavLink to="/" className="subLink">Home</NavLink>
                <NavLink to="/locations" className="subLink">Locations</NavLink>
              </Nav>
            </Container>
          </Navbar>
        </header>

        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/locations">
            <Locations getLocation={getLocationName} locations={locations}></Locations>
          </Route>
          <Route path="/review">
            <ReviewPage location={locationName}></ReviewPage>
          </Route>
          <Route path="/rental">
            <Rental></Rental>
          </Route>
          <Route path="/weather">
            <Weather></Weather>
          </Route>
        </Switch>

        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin></script>
      </div>
    </BrowserRouter>
  );
}

export default App;