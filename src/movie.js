import React from'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';

class Movie extends React.Component {
  render() {
    
    let display = this.props.movieData.map(x => {
        return (<Card>
          <Card.Title>{x.title}</Card.Title>
          <Card.Img src={`${x.imgPath}`} />
          <Card.Text>{x.overview}</Card.Text>
          <Card.Text>{x.avgVote}</Card.Text>
          <Card.Text>{x.sumVote}</Card.Text>
          <Card.Text>{x.popularity}</Card.Text>
          <Card.Text>{x.release}</Card.Text>
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

export default Movie;