import React from'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';

class Weather extends React.Component {
  render() {
    
    let display = this.props.weatherData.map(x => {
        return (<Card>
          <Card.Title>{x.date}</Card.Title>
          <Card.Text>{x.description}</Card.Text>
        </Card>)
    })
console.log(display)
    return(
      <>
      <CardColumns>
        {display}
      </CardColumns>
      </>
    )
  }
}

export default Weather;