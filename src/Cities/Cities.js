import React from "react";
import "./Cities.css";
import { CardGroup, Card } from "react-bootstrap";
import {map} from 'lodash'
import {states} from '../database/database'

class Cities extends React.Component {
    createCard = (title)=>{
        return(
            <div style={{padding: '0.4rem', cursor: "pointer"}} onClick={() => this.props.updateCity(title)}>
            <Card style={{ minWidth: '13rem', maxWidth: '15rem'}} >
            <Card.Img variant="top" src={`https://picsum.photos/150/80?random=1`} />
            <Card.ImgOverlay style={{background: 'rgba(0,0,0, 0.4)', }} >
            <h4><Card.Title style={{color: 'white'}}>{title}</Card.Title></h4>
            </Card.ImgOverlay>
            </Card>
            </div>
        )
    }

    render() {
    return (
      <div style={{margin: "0 5px 0 5px"}}>
      <div className="container" >
      <div className="row">
        <h3>Uttar Pradesh</h3>
        <div className='container'>
        <CardGroup>
          {map(states.uttarpradesh, this.createCard)}
        </CardGroup>
        </div>

        <h3>Rajasthan</h3>
        <div className='container'>
        <CardGroup>
          {map(states.rajasthan, this.createCard)}
        </CardGroup>
        </div>


        <h3>Gujarat</h3>
        <div className='container'>
        <CardGroup>
          {map(states.gujarat, this.createCard)}
        </CardGroup>
        </div>

        <h3>Maharashtra</h3>
        <div className='container'>
        <CardGroup>
          {map(states.maharashtra, this.createCard)}
        </CardGroup>
        </div>

        <h3>Karnataka</h3>
        <div className='container'>
        <CardGroup>
          {map(states.karnataka, this.createCard)}
        </CardGroup>
        </div>


        <h3>West Bengal</h3>
        <div className='container'>
        <CardGroup>
          {map(states.westbengal, this.createCard)}
        </CardGroup>
        </div>


        <h3>Telangana</h3>
        <div className='container'>
        <CardGroup>
          {map(states.telangana, this.createCard)}
        </CardGroup>
        </div>


        <h3>NCR</h3>
        <div className='container'>
        <CardGroup>
          {map(states.ncr, this.createCard)}
        </CardGroup>
        </div>


        <h3>Tamil Nadu</h3>
        <div className='container'>
        <CardGroup>
          {map(states.tamilnadu, this.createCard)}
        </CardGroup>
        </div>


        <h3>Punjab</h3>
        <div className='container'>
        <CardGroup>
          {map(states.punjab, this.createCard)}
        </CardGroup>
        </div>

        
        </div>
      </div>
      </div>
    );
  }
}

export default Cities;
