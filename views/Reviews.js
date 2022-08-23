import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Review from './Review'

function Reviews( {reviews}) {

  return (
    <>
    {
        reviews && reviews?.data.map((review) => (
            <><br/><Review  review={review}/></>
        ))
    }
    </>
  )
}

export default Reviews