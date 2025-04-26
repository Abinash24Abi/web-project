import React, { useState } from 'react'
import {Link ,useNavigate}  from 'react-router-dom'
import logo from '../assest/logo.ico'
import { FaShoppingCart ,FaHeart,} from "react-icons/fa";
import {FaUserXmark,FaUserCheck} from 'react-icons/fa6'
import {useCart} from 'react-use-cart'
import './Nav.css'
import axios from 'axios';
import { BsWatch } from "react-icons/bs";


const Nav = () => { 

    const nav = useNavigate()


  const [show,setShow] = useState(false)
  const {totalItems} = useCart()

  const admin = localStorage.getItem('useremail')

  axios.get('http://localhost:8989', { withCredentials: true })
  .then(res => {
    if (res.data.Status === 'unauthorized') {
      setShow(true);
    } else {
      setShow(false);
    }
  })
  .catch(err => {
    console.error('Error during auth check:', err);
  });

  const funlog = () => {
    if(show){
    nav('/login')
    }
    else{
      const result = window.confirm("confirm to logOut")
      console.log(result)
      if(result){
        console.log("logout")
       setShow(true)
       localStorage.clear('useremail')
       localStorage.setItem('react-use-cart','{"items":[],"isEmpty":true,"totalItems":0,"totalUniqueItems":0,"cartTotal":0,"metadata":{}}')
       axios.get('http://localhost:8989/logout', {
        withCredentials: true
      })
       .then(() => {console.log("logout successfully") ; window.location.reload()})
       .catch(() => {console.log("logOut err")})
      }
      else{
        console.log("no")
      }
    }
  } 

  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top z-3">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#"> <img src={logo} alt='logo' width='50px' height='50px' /> <span className='logoname'>Tick Tock </span></a> */}
    <a className="navbar-brand" href="#" style={{display:'flex',justifyContent:'center'}}> <BsWatch style={{fontSize:'2rem'}} /> <span className='logoname'>Tick Tock </span></a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" >Contact</Link>
        </li>

        {admin == 'admin@gmail.com' &&  <li className="nav-item">
          <Link to="/" className="nav-link" >Admin</Link>
        </li> }

        <li className="nav-item">
          <Link to="/cardinfo" className="nav-link"><FaShoppingCart /><span className='count'>{totalItems}</span></Link>
        </li>

        <li className="nav-item">
        <Link to="/" className="nav-link"><FaHeart /></Link>
        </li>

        <li className="nav-item">
        <p className="nav-link" onClick={funlog}>{show ? <FaUserXmark style={{ color: 'red' }} /> : <FaUserCheck style={{ color: 'green' }} /> }</p>
        </li>
        
        
        { /* <li className="nav-item dropdown">
        
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
       
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
       
        </li> */ }
                 
      </ul>
      
    </div>
  </div>
</nav>


    </div>
  )
}

export default Nav