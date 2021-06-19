import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import LocationCard from './LocationCard';
import axios from'axios';
import Weather from './weather'
import Movie from './movie'



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
        weather: [],
        display: '',
        movies: []
      };
    }

  handleChange = (e) => {
    this.setState({city: e.target.value})
    }
  
  handleSubmit = async (e) => {
    e.preventDefault();
    try{
    this.setState({display: ''})
    const location = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.city}&format=json`)
    const cityInfo = location.data[0];
    let displayName = cityInfo.display_name;
    this.setState({displayName});
    this.setState({lat: cityInfo.lat})
    this.setState({lon: cityInfo.lon})


    this.setState({mapImgPath: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${cityInfo.lat},${cityInfo.lon}&zoom=12`})


    const weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}&q=${this.state.displayName}`)

    this.setState({weather: weatherData.data})
    
    const movieData = await axios.get(`http://localhost:3001/movies?city=${this.state.city}`)

    this.setState({movies: movieData.data})

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
        <>
          <LocationCard
          displayName={this.state.displayName}
          mapImgPath={this.state.mapImgPath}
          lat={this.state.lat}
          lon={this.state.lon} />
          <Weather weatherData={this.state.weather} />
          <Movie movieData={this.state.movies} />
        </>
        }
      </>
    )
  }
}

export default LocationForm;