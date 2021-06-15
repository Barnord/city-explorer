import React from 'react';
import Card from 'react-bootstrap/Card'
import './App.css';


class LocationCard extends React.Component {
  render() {
    return(
      <Card style={{ width: '70%' }}>
          <Card.Header>
            <Card.Title>{this.props.displayName}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={this.props.imgPath} />
          </Card.Body>
          <Card.Footer>
            <Card.Text>{`Latitude: ${this.props.lat} Longitude: ${this.props.lon}`}</Card.Text>
          </Card.Footer>
        </Card>
    )
  }
}

export default LocationCard;