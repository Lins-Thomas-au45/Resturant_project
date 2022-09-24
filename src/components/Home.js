import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import {useDispatch,useSelector} from 'react-redux'
import { listRestaurants} from '../actions/restaurantAction'
import './input.css'
function Home() {
const [filter,setFilter] = useState("")
const dispatch = useDispatch()

const restaurantReducer = useSelector(state =>state.restaurantReducer)
const {restaurant} = restaurantReducer

useEffect(() => {
 dispatch(listRestaurants())
  
}, [])


    // const [hotels,setHotels] = useState([])

    // const fetchData = async () => {
    //     await fetch('/restaurants.json')
    //     .then((res) => res.json())
    //     .then((data) => setHotels(data.restaurants))
    // }
    // useEffect(() =>{
    //   fetchData()
    // },[])
   
  return (
   

   <Row>
      <Row>
        <Col>
    <input className = "input"
          onChange ={event =>setFilter(event.target.value)}
          placeholder ='search a place here'
          value ={filter}
          type= 'text'/>
          </Col>
      </Row>
          {restaurant.filter(item => {
            if (filter === ""){
              return item
            }
            else if(item.neighborhood.toLowerCase().includes(filter.toLowerCase())){
              return item
            }
          })
      .map((item) => (
       <Col sm={12} md={8} lg={6} xl={3}>
     <RestaurantCard item = {item}/>
      </Col>
    ))}
    
   </Row>
   
  )
}

export default Home