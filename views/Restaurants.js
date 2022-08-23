import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Restaurant from './Restaurant'

function Restaurants() {
    const restaurants = useSelector((state) => state);

  return (
    <>
    {
        restaurants.map((restaurant) => (
            <><br/><Restaurant key={restaurant.id} id={restaurant.id} restaurant={restaurant.attributes}/></>
        ))
    }
    </>
  )
}

export default Restaurants