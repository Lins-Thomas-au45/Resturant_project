import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'

function Home() {
    const [hotels,setHotels] = useState([])

    const fetchData = async () => {
        await fetch('/restaurants.json')
        .then((res) => res.json())
        .then((data) => setHotels(data.restaurants))
    }
    useEffect(() =>{
      fetchData()
    },[])
   
  return (
   <Row>
      {hotels.map((item) => (
       <Col sm={12} md={8} lg={6} xl={3}>
     <RestaurantCard item = {item}/>
      </Col>
    ))}
    
   </Row>
  )
}

export default Home