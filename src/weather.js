import React from'react';
import Card from 'react-bootstrap/Card'

class Weather extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
      // const display = this.props.weatherData.forEach(i => {
      // <Card style={{ width: '10%' }}>
      //   <Card.Title>{i.date}</Card.Title>
      //   <Card.Text>{i.description}</Card.Text>
      // </Card>
    // })
console.log(this.props.weatherData)
    return(
      <>
        <Card>
        <Card.Title>{this.props.weatherData.date}</Card.Title>
        <Card.Text>{this.props.weatherData.description}</Card.Text>
      </Card>
      </>
    )
  }
}

export default Weather;