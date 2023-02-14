import React, { useEffect,useState } from 'react'
import axios from '../../axios'
import {API_KEY} from '../../Constants/constants'
function Banner() {

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
    })
  },[])
  return (
    <div className='banner'>
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner-button">
            <button className='button'>Play</button>
            <button className='button'>Movie List</button>
        </div>
        <h1 className="description">
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
