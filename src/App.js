import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom';
import {Container,Navbar,Nav} from 'react-bootstrap';
import Home from './components/home';
import Projects from './components/projects';
import AboutMe from './components/aboutMe';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  document.body.style = 'background: #F87666;';

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
        <Nav className="me-auto">
          <Nav.Link><Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link></Nav.Link>
          <Nav.Link><Link to='/projects' style={{textDecoration:'none', color:'white'}}>My Projects</Link></Nav.Link>
          <Nav.Link><Link to='/aboutMe' style={{textDecoration:'none', color:'white'}}>About Me</Link></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <Route exact path='/' component={Home} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/aboutMe' component={AboutMe} />
    </div>
  );
}

export default App;
