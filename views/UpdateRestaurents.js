import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import addRestaurant from '../redux/restaurants/thunk/addRestaurant'

function UpdateRestaurents({ restaurant,id }) {
  const dispatch = useDispatch();

  const [name,setName] = useState('');
  const [location,setLocation] = useState('');
  const [date,setDate] = useState('');
  const [openingTime,setOpeningTime] = useState('');
  const [closeingTime,setCloseingTime] = useState('');

  useEffect(() => {
  
    if(restaurant) {
      setName(restaurant.title);
      debugger
    }
  },[])

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {
      data: {
        title: name,
        date,
        location,
        openningtime : openingTime,
        closingtime : closeingTime
      }
    }
    dispatch(addRestaurant(data));
  };

  return (
    <>
    <br/>
    <br/>
    <div className="flex justify-center items-center">
    <form className="w-full max-w-lg center " onSubmit={submitHandler}>

    <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-title"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-title"
              type="text"
              placeholder="Restaurent Name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              required
            />
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-date"
            >
              Opening Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-date"
              type="date"
              placeholder="Date here "
              value={date}
              onChange={(e)=> setDate(e.target.value)}
            />
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-openning-time"
            >
              Openning Time
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-openning-time"
              type="time"
              placeholder="Openning time"
              required
              value={openingTime}
              onChange={(e)=>{
                let value = e.target.value;
                    let value_split = value.split(':')
                    if(value_split.length<3){
                      value = value+':00'
                    }
                setOpeningTime(value)}}
            />
            
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-closing-time"
            >
              Closing Time 
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-closing-time"
              type="time"
              placeholder="Closing time "
              required
              value={closeingTime}
              onChange={(e)=> {
                let value = e.target.value;
                let value_split = value.split(':')
                    if(value_split.length<3){
                      value = value+':00'
                    }
                setCloseingTime(value)}}
            />
          </div>
        </div>
   
        {/* <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-image"
            >
              Image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-image"
              type="file"
              placeholder="Upload image"
            />
          </div>
          
        </div> */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-location"
            >
              Location
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-location"
              type="text"
              placeholder="Location"
              required
              value={location}
              onChange={(e)=> setLocation(e.target.value)}
            />
          </div>
          
          
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <button type="submit" className="bg-blue-900 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-full float-right">
              Save
            </button>
          </div>
        </div>
      </form>

   </div>
      
    </>
  );
}

export default UpdateRestaurents;
