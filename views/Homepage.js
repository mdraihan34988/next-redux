import React, { useEffect } from 'react'
import Restaurants from './Restaurants'
import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store'
import fetchRestaurant from '../redux/restaurants/thunk/fetchRestaurant'

function Homepage() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchRestaurant);
  },[])

  return (
    <Restaurants />
  )
}

export default Homepage

export async function getServerSideProps(context) {
  // await store.dispatch(fetchRestaurant);
}