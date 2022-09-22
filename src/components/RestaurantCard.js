import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function RestaurantCard({item}) {
    
  return (
    <Link to ={`details/${item.id}`}>{/*string interpolation*/}
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
    </Link>
   
  )
}

export default RestaurantCard