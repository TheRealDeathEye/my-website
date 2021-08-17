import React from 'react';
import {Card} from 'react-bootstrap';

function AboutMe() {
  return(
    <div align='center'>
      <img src='imgs/trevor.JPG' alt='' style={{width:'75%', maxWidth:'450px', margin:'25px 0 25px 0'}} />
      <Card style={{width:'85%', maxWidth:'500px', margin:'25px 0 25px 0'}}>
        <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className=" text-center">About Me</Card.Header>
        <Card.Body style={{background:'#c7c4c3'}}>
          <p>I am a Computer Engineering student attending University of Missouri - Columbia.</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutMe;