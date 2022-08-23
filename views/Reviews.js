import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Review from './Review'

function Reviews( {id}) {
  const [loaded,setLoaded] = useState(false);
  const [reviews,setReviews] = useState([]);

  useEffect(() => {
    const actionSinglePage = async () => {
        let result = await fetch('https://starpy-backend.herokuapp.com/api/restaurents/'+id+'?populate=*', {
          method: 'get',
        });
        let jsonResut = await result.json();
        
        if(jsonResut) {
          setReviews(jsonResut.data.attributes.reviews.data)
          setLoaded(true);
        }
        
        
    }
    actionSinglePage();
    
  },[])


  return (
    <>
       {loaded && reviews?.length>0 && <h3 className="text-4xl font-normal text-center leading-normal mt-0 mb-2 text-pink-800">
          Customer Reviews
        </h3>}
    {
       loaded &&  reviews?.map((review) => (
            <><br/><Review  review={review}/></>
        ))
    }
    </>
  )
}

export default Reviews