import React from 'react';
import {Card} from 'react-bootstrap';

function Projects() {
  return(
    <div align='center'>
      <h2 style={{fontSize: "3em", marginTop:'100px'}}>My Projects</h2>
      <div style={{border:'2px solid black', width:'300px', marginBottom:'35px'}} />
      <div style={{width:'85%', maxWidth:'650px', margin:'0 0 25px 0'}} align='center'>
          <Card style={{margin:'25px 0 25px 0'}}>
            <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className="text-center">CryptoGenerator</Card.Header>
            <Card.Link href='https://cryptogenerator.app/'><Card.Img src='imgs/4.jpg' style={{height:'200px', objectFit: 'contain', background:'#c7c4c3', padding:'15px'}} /></Card.Link>
            <Card.Body style={{background:'#c7c4c3'}}>
              <p>An application that allows you to easily create Binance BEP-20 and Etherium ERC-20 tokens.</p>
            </Card.Body>
          </Card>
          <Card style={{margin:'25px 0 25px 0'}}>
            <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className="text-center">Seedling</Card.Header>
            <Card.Link href='http://seedling.charity/'><Card.Img src='imgs/hor-logo.svg' style={{height:'200px', objectFit: 'contain', background:'#c7c4c3', padding:'15px'}} /></Card.Link>
            <Card.Body style={{background:'#c7c4c3'}}>
              <p>A Binance charity token that works towards the restoration of forests.</p>
            </Card.Body>
          </Card>
          <Card style={{margin:'25px 0 25px 0'}}>
            <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className="text-center">Starfish</Card.Header>
            <Card.Link href='https://www.starfishmarinelife.com/'><Card.Img src='imgs/starfish.png' style={{height:'200px', objectFit: 'contain', background:'#c7c4c3', padding:'15px'}} /></Card.Link>
            <Card.Body style={{background:'#c7c4c3'}}>
              <p>A Binance charity token that helps fund ocean restoration.</p>
            </Card.Body>
          </Card>
          <Card style={{margin:'25px 0 25px 0'}}>
            <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className="text-center">StarGenerator</Card.Header>
            <Card.Link href='https://startokennft.com/'><Card.Img src='imgs/starLogo.png' style={{height:'200px', objectFit: 'contain', background:'#000000', padding:'15px'}} /></Card.Link>
            <Card.Body style={{background:'#c7c4c3'}}>
              <p>An algoritm that automatically generates star systems from a .txt file with only four input variables: Name, Star Color, Star Radius, and Star Amount.</p>
            </Card.Body>
          </Card>
      </div>
    </div>
  );
}

export default Projects;