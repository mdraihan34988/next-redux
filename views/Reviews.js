import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Review from './Review'

function Reviews( {reviews}) {
debugger
  return (
    <>

    {
        reviews.map((review) => (
            <><br/><Review  review={reviews.review}/></>
        ))
    }
    </>
  )
}

export default Reviews