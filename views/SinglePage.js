import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Restaurant from './Restaurant';
import Review from './Review';
import Head from 'next/head'

function SinglePage({id}) {
    const restaurants = useSelector((state) => state);
    const restaurant = restaurants.filter(obj => parseInt(id) === obj.id)[0]
    useEffect(()=> {
        debugger
        console.log(restaurant)
        console.log(Review)
        
    },[])
  return (
    <>
    <Head><title>Restaurant</title></Head>
    {restaurant ? <> <Restaurant restaurant={restaurant.attributes} id={id} /> <br/> <Review  reviews={restaurant.attributes}/> <br/></> : <div className='text-center font-bold'>404 | Not Found</div>}
    </>
  )
}

export default SinglePage