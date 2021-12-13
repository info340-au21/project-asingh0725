import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Home from './Home';
import Locations from './Locations';

import ReviewPage from './ReviewPage';
import Rental from './Rental';
import Login from './Login';

import locations from './../data/locations.json';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import WeatherPage from './WeatherPage';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unregisteredAuthListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    })

    return () => {
      unregisteredAuthListener();
    }
  }, [auth])

  const handleSignOut = (event) => {
    signOut(getAuth());
  }

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
                {currentUser && <>
                  {/* <NavLink to="/login" className="subLink">{currentUser.displayName}</NavLink> */}
                  <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out {currentUser.displayName}</button>
                </>}
                {!currentUser &&
                  <NavLink to="/login" className="subLink">Login</NavLink>
                }
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
            <ReviewPage location={locationName} user={currentUser}></ReviewPage>
          </Route>
          <Route path="/rental">
            <Rental></Rental>
          </Route>
          <Route path="/weather">
            <WeatherPage></WeatherPage>
          </Route>
          <Route path="/login">
            <Login user={currentUser}></Login>
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