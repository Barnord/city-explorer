import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from'axios';


class LocationForm extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        city: '',
        displayName: '',
      };
    }

  hangleChange = e => {
    this.setState({city: e.target.value})
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.city}&format=json`)
    const cityInfo = response.data[0];
    let displayName = cityInfo.display_name;
    this.setState({displayName});
    console.log(cityInfo);
  }
  

  render() {
    return(
      <>
        <p>Type in a city name</p>
        <Form onSubmit={this.handleSubmit}>
          <input name="city" onChange={this.handleChange} />
          <Button variant="primary">Explore!</Button>
        </Form>
      </>
    )
  }
}

export default LocationForm;