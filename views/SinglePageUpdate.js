import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Restaurant from './Restaurant';
import Head from 'next/head'
import UpdateRestaurents from './UpdateRestaurents';

function SinglePageUpdate({id}) {
    const restaurants = useSelector((state) => state);
    const restaurant = restaurants.filter(obj => parseInt(id) === obj.id)[0]
    useEffect(()=> {
        
        console.log(restaurant)
        
    },[])
  return (
    <>
    <Head><title>Restaurant</title></Head>
    {restaurant ? <UpdateRestaurents restaurant={restaurant.attributes} id={id} /> : <div className='text-center font-bold'>404 | Not Found</div>}
    </>
  )
}

export default SinglePageUpdate