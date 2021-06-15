import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LocationForm extends React.Component {
  render() {
    return(
      <>
        <Form>
          <Form.Group>
            <Form.Control as="textarea" placeholder="Location">
            </Form.Control>
              <Button variant="primary" type="submit">Explore!</Button>
          </Form.Group>
        </Form>
      </>
    )
  }
}

export default LocationForm;