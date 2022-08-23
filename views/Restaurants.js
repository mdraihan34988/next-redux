import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Restaurant from './Restaurant'

function Restaurants() {
    const restaurants = useSelector((state) => state)
    
  return (
    <>
    {
        restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant.attributes}/>
        ))
    }
    </>
  )
}

export default Restaurants