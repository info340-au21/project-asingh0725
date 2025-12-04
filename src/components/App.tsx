import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
} from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import Home from "./Home";
import Locations from "./locations/Locations";
import ReviewPage from "./review/ReviewPage";
import Rental from "./rentals/Rental";
import Login from "./login/Login";
import WeatherPage from "./weather/WeatherPage";

import locationsData from "../data/locations.json";
import REVIEW_LOG from "../data/review_log.json";
import rentalData from "../data/rental.json";

import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { Review } from "../types/review";
import { Location } from "../types/location";

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [locationName, setLocationName] = useState<string>("");

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ?? null);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = () => {
    signOut(getAuth());
  };

  const getLocationName = (locName: string) => {
    setLocationName(locName);
  };

  return (
    <BrowserRouter basename="/mountainstop">
      <div>
        <header>
          <Navbar variant="dark" fixed="top" className="navBar">
            <Container>
              <Navbar.Brand>
                <Link to="/">
                  <img
                    alt="mountainstoplogo"
                    src="../images/activities/mountainstop.png"
                    className="mountainstop-logo"
                  />
                </Link>
              </Navbar.Brand>

              <Nav className="ms-auto navList">
                <NavLink to="/" className="subLink" exact>
                  Home
                </NavLink>
                <NavLink to="/locations" className="subLink">
                  Locations
                </NavLink>
                {currentUser ? (
                  <button
                    className="btn btn-secondary ms-2 subLink"
                    onClick={handleSignOut}
                  >
                    Sign Out {currentUser.displayName}
                  </button>
                ) : (
                  <NavLink to="/login" className="subLink">
                    Login
                  </NavLink>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/locations">
            <Locations
              getLocation={getLocationName}
              locations={locationsData as Location[]}
            />
          </Route>

          <Route path="/review">
            <ReviewPage
              location={locationName}
              user={currentUser}
              reviewData={REVIEW_LOG as Review[]}
            />
          </Route>

          <Route path="/rental">
            <Rental data={rentalData} />
          </Route>

          <Route path="/weather">
            <WeatherPage />
          </Route>

          <Route path="/login">
            <Login user={currentUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;