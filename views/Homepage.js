import React, { useEffect } from 'react'
import Restaurants from './Restaurants'
import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store'
import fetchRestaurant from '../redux/restaurants/thunk/fetchRestaurant'
import Head from 'next/head'

function Homepage() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchRestaurant);
  },[])

  return (
    <>
      <Head><title>Restaurants</title></Head>
      <Restaurants />
    </>
  )
}

export default Homepage

export async function getServerSideProps(context) {
  // await store.dispatch(fetchRestaurant);
}