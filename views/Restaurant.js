import React from 'react'
import Moment from "react-moment";

function Restaurant({restaurant}) {

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={process.env.NEXT_PUBLIC_APP_API_URL+restaurant?.image?.data?.attributes?.url} alt={restaurant?.title}/>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{restaurant?.location}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{restaurant?.title}</a>
          <p className="mt-2 text-slate-500">Opening Time : <Moment format="LT">{restaurant?.attributes?.openningtime}</Moment></p>
          <p className="mt-2 text-slate-500">Closing Time : <Moment format="LT">{restaurant?.attributes?.closingtime}</Moment></p>
        </div>
      </div>
    </div>
  )
}

export default Restaurant