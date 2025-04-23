import React, { useState } from 'react'
import one from '../assest/awg.jpg'
import two from '../assest/frame.jpg'
import three from '../assest/nan.jpg'
import four from '../assest/women.jpg'
import './Part3.css'

const Part3 = () => {
  const productimages = [one,two,three,four]
  const [showimg,setShowimg] = useState(one)
  return (
    <div className='p-5'>
     
     <div className='gallerycontainer'>

      <div className='listgallery'>
        {productimages.map((data,index) => <img src={data} alt={index} onMouseOver={() => setShowimg(data)} />)}
      </div>

      <div><img src={showimg} className='main-img' alt='img'/></div>

      <div className='gallerycontent'>
        <h1>Shop Watches</h1>
        <p> Explore what's in store for you this week! Authentic luxury watches directly from the brands. Shop with confidence and find your perfect timepiece today...</p>
      </div>


      
     
     </div>

    </div>
  )
}

export default Part3
