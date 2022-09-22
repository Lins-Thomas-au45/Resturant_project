import React from 'react'
import {Card,Button} from 'react-bootstrap'

function RestaurantCard({item}) {
    
  return (
    <Card className='my-3 p-3 rounded cards'>
      <Card.Img variant="top" src={item.photograph} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            <strong>Cuisine : {item.cuisine_type}</strong>
          <p>{item.address}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default RestaurantCard