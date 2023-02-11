import React from 'react'

function Banner() {
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
