import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import LocationCard from './LocationCard';
import axios from'axios';


class LocationForm extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        city: '',
        displayName: '',
        lat: '',
        lon: '',
        mapImgPath: '',
        errorCode: '',
        weatherPath: '',
        weather: '',
      };
    }

  handleChange = (e) => {
    this.setState({city: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try{
    // const location = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.city}&format=json`)
    // const cityInfo = location.data[0];
    // let displayName = cityInfo.display_name;
    // this.setState({displayName});
    // this.setState({lat: cityInfo.lat})
    // this.setState({lon: cityInfo.lon})
    // this.setState({mapImgPath: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${cityInfo.lat},${cityInfo.lon}&zoom=12`})
    // this.setState({weatherPath: `http://localhost:3001/weather?lat=${this.lat}&lon=${this.lon}&q=${this.displayName}`})
    this.setState({weatherPath:`http://localhost:3001/weather?lat=47.60621&lon=-122.33207&q=Seattle`})
    const weatherData = await axios.get(this.state.weatherPath)
    this.setState({weather: weatherData})
    console.log(weatherData)
    }
    catch(err) {
      console.log('err.message');
      this.setState({errorCode: err.message})
    }
  }
  

  render() {
    return(
      <>
        <Form onSubmit={this.handleSubmit}>
          <input name="city" placeholder="Type in a city name" onChange={this.handleChange} />
          <Button variant="primary" type="submit">Explore!</Button>
        </Form>
        <p>{this.weather}</p>
        {this.state.errorCode.length>0?
        <Container>
            <p>{this.state.errorCode}</p>
        </Container>
        :
        <LocationCard
        displayName={this.state.displayName}
        mapImgPath={this.state.mapImgPath}
        lat={this.state.lat}
        lon={this.state.lon} />
        }
      </>
    )
  }
}

export default LocationForm;