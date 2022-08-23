import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Restaurant from './Restaurant';
import Head from 'next/head'
import Reviews from './Reviews';

function SinglePage({id}) {
    const restaurants = useSelector((state) => state);
    const restaurant = restaurants.filter(obj => parseInt(id) === obj.id)[0]
    useEffect(()=> {
        
        console.log(restaurant)
        console.log(restaurant.attributes.reviews)
        debugger
    },[])
  return (
    <>
    <Head><title>Restaurant</title></Head>
    {restaurant ? <> <Restaurant restaurant={restaurant.attributes} id={id} /> <br/> {restaurant.attributes.reviews && <Reviews  reviews={restaurant.attributes.reviews}/>} <br/></> : <div className='text-center font-bold'>404 | Not Found</div>}
    </>
  )
}

export default SinglePage