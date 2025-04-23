import React from 'react'
import './Css/Background.css'

// import img1 from '../assest/sys.jpg'
import img1 from '../assest/bg/bg1.jpg'
// import img2 from '../assest/moon.webp'
import img2 from '../assest/bg/bg02.jpg'
// import img3 from '../assest/sun.jpg'
import img3 from '../assest/bg03 - Copy.webp'
import screenplay from '../assest/play.mp4'

const Background = ({picCount,play}) => {
  if(play){
    return (
        <video className='background fade-in' autoPlay loop muted >
            <source src={screenplay} type='video/mp4' />
        </video>
    )
  }
  else if(picCount === 0){
    return <img src={img1} className='background fade-in' alt=''/>
  }
  else if(picCount === 1){
    return <img src={img2} className='background fade-in' alt=''/>
  }
  else if(picCount === 2){
    return <img src={img3} className='background fade-in' alt=''/>
  }
}

export default Background
