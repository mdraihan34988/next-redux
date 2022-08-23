import React from 'react'
import Moment from "react-moment";

function Restaurant({restaurant,id}) {
  debugger
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={process.env.NEXT_PUBLIC_APP_API_URL+restaurant?.image?.data?.attributes?.url} alt={restaurant?.title}/>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{restaurant?.location}</div>
          <a href={"/restaurant/"+id} className="block mt-1 text-lg leading-tight cursor:pointer font-medium text-black hover:underline">{restaurant?.title}</a>
          <p className="mt-2 text-slate-500">Opening Time : <Moment format="LT">{restaurant?.attributes?.openningtime}</Moment></p>
          <p className="my-2 text-slate-500">Closing Time : <Moment format="LT">{restaurant?.attributes?.closingtime}</Moment></p>
          <a href={"/delete/"+id}><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full float-right">
            Delete
          </button>
          </a>
          <a href={"/update/"+id}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mx-2 px-2 rounded-full float-right">
            Update
          </button>
          </a>
          
          
        </div>
          
      </div>
          
    </div>
  )
}

export default Restaurant