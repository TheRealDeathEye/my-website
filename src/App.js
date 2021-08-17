import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom';
import {Container,Navbar,Nav} from 'react-bootstrap';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" fixed="top">
        <Container>
          <Nav>
            <Nav.Link><Link style={{color:"white", textDecoration:"none"}} to="/">home</Link></Nav.Link>
            <Nav.Link><Link style={{color:"white", textDecoration:"none"}} to="/">builder/manager</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;
