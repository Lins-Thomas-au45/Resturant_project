import React from 'react'
import {useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import {Row,Col,Image, ListGroup,Card} from 'react-bootstrap'
import Rating from './Rating'
import {useSelector} from 'react-redux'
function RestaurantDetails() {

  //const [data,setData] = useState([])
  const params = useParams()

  const restaurantReducer = useSelector(state =>state.restaurantReducer)
  const {restaurant} = restaurantReducer

  console.log(restaurant);
  // const fetchData = async() =>{
  //   await fetch('/restaurants.json')
  //   .then((res) => res.json())
  //   .then((data) => setData(data.restaurants))
  // }

  // useEffect(() => {
  //   fetchData()
  //  }, [])
  
   const detail = restaurant.find((i) => i.id == params.id)
   

  return (
    <> 
    <Link className='btn btn-outline-dark my-2 rounded btn-sm' to ='/'>Back</Link>
     {detail ? (
      <Row className='my-3'>
        <Col md={3}>
          <Image className='img' src={detail.photograph} alt={detail.name} fluid/>
        </Col>
        <Col ms={4}>
          <ListGroup>
            <ListGroup.Item>
              <h2>{detail.name}</h2>
              <p>{detail.neighbourhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Cuisine : {detail.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Address : {detail.address}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h4>Operating hours</h4>
              <p>Monday:{detail.operating_hours.Monday}</p>
              <p>Tuesday:{detail.operating_hours.Monday}</p>
              <p>Wednesday:{detail.operating_hours.Monday}</p>
              <p>Thursday:{detail.operating_hours.Monday}</p>
              <p>Friday:{detail.operating_hours.Friday}</p>
              <p>Saturday:{detail.operating_hours.Saturday}</p>
              <p>Sunday:{detail.operating_hours.Sunday}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Row>
          <Card className="my-3 p-3 mx-3 rounded card">
            <Rating data = {detail.reviews}/>
          </Card>
        </Row>
      </Row>
      ):'null'}   
    </>
  )
}

export default RestaurantDetails