import React from 'react'

function Review({review}) {
  debugger
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{review?.reviewer}</div>
          <div className="block mt-1 text-lg leading-tight cursor:pointer font-medium text-black ">{review?.review}</div>
          
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full float-right">
            Update
          </button> */}
          
        </div>
          
      </div>
          
    </div>
  )
}

export default Review