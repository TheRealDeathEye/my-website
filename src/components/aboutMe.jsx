import React from 'react';
import {Card} from 'react-bootstrap';

function AboutMe() {
  return(
    <div align='center'>
      <img src='imgs/trevor.JPG' alt='' style={{width:'75%', maxWidth:'450px', margin:'100px 0 25px 0'}} />
      <Card style={{width:'85%', maxWidth:'500px', margin:'25px 0 25px 0'}}>
        <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className=" text-center">About Me</Card.Header>
        <Card.Body style={{background:'#c7c4c3'}}>
          <p>I am a Computer Engineer attending University of Missouri - Columbia along with being a Co-CEO of Howard & Goldstein LLC, a holding compnay based in Hillsboro, Missouri.</p>
        </Card.Body>
      </Card>
      <div className='row' style={{width:'65%', maxWidth:'300px'}}>
        <div className='col'>
          <a href='https://github.com/TheRealDeathEye'><img src='imgs/github.png' alt='' style={{width:'40px', height:'40px'}} /></a>
        </div>
        <div className='col'>
          <a href='https://www.linkedin.com/in/trevor-orr/'><img src='imgs/linkedin.png' alt='' style={{width:'40px', height:'40px'}} /></a>
        </div>
      </div>
      <Card style={{width:'85%', maxWidth:'500px', margin:'25px 0 25px 0'}}>
        <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className=" text-center">Languages</Card.Header>
        <Card.Body style={{background:'#c7c4c3'}}>
          <div className='row'>
            <div className='col-4'><p>Javascript</p></div>
            <div className='col-4'><p>React</p></div>
            <div className='col-4'><p>HTML</p></div>
            <div className='col-4'><p>CSS</p></div>
            <div className='col-4'><p>C</p></div>
            <div className='col-4'><p>Python</p></div>
            <div className='col-4'><p>Java</p></div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutMe;