import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

import Navbar from 'react-bootstrap';
import Container from 'react-bootstrap';

function App(props) {
  return (
    <BrowserRouter basename="/mountainstop">
      <div>
        <header>
          <Navbar>
            <Container>
              <Navbar.Brand></Navbar.Brand>
            </Container>
          </Navbar>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App;