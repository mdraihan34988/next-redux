import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Restaurant from '../../views/Restaurant';
import { useDispatch, useSelector } from 'react-redux'
import store from '../../redux/store'
import fetchRestaurant from '../../redux/restaurants/thunk/fetchRestaurant'
import SinglePage from '../../views/SinglePage';

function SingleRestaurant({id}) {
    const dispatch = useDispatch();
    const [loaded,setLoaded] = useState(false);

    // const actionSinglePage = 

    useEffect(() => {

        const actionSinglePage = async () => {
            await dispatch(fetchRestaurant);
            setLoaded(true);
        }
        actionSinglePage();
    },[dispatch])

  return (
    <>
        {loaded && <SinglePage id={id} />}
    </>
  )
}

export default SingleRestaurant

export async function getServerSideProps(context) {
    console.log(context.params.id)
    // await store.dispatch(fetchRestaurant);
    let id = context.params.id;
    return {
        props: {
            id : id
        }, // will be passed to the page component as props
      }
}

