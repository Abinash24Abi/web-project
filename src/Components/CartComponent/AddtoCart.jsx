import axios from 'axios';
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useLocation} from 'react-router-dom'
// import imgSmall from '../../assest/watch/movada.jpg';
// import imgLarge from '../../assest/watch/movada.jpg'; 

import { useCart } from "react-use-cart";

const AddtoCart = () => {


  const { addItem } = useCart();

  const data = useLocation()
  console.log(data.state)


  const addfun = () => {
    addItem(data.state)
    setTimeout(async () => {
      const email = localStorage.getItem('useremail')
      const cartinfo = localStorage.getItem('react-use-cart')
     await axios.put('http://localhost:8989/updatecart',{email,cartinfo})
      .then(() => {
        console.log("update")
      })
      .catch(() => {
        console.log('err')
      })
    },200)
    
    
  }

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row shadow-lg rounded-4 p-4 bg-white w-100 mx-2 mx-md-5"
        style={{ maxWidth: '1100px', height: '50vh', position: 'relative' }}
      >
        {/* Product Image with Magnifier */}
        <div className="col-md-5 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <div style={{ width: '100%', maxWidth: '300px' }}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Boult Watch',
                  isFluidWidth: true,
                  src: data.state.img,
                },
                largeImage: {
                  src: data.state.img,
                  width: 1500,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: '200%',
                  height: '100%',
                },
                enlargedImageContainerStyle: {
                  position: 'absolute',
                  top: '0px',
                  left: '122%', // Push it outside to the right
                  width: '600px',
                  height: '300px',
                  zIndex: 1000,
                  overflow: 'hidden',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                },
                enlargedImageStyle: {
                  objectFit: 'cover',
                  borderRadius: '16px',
                },
                isHintEnabled: true,
                enlargedImagePosition: 'beside', // Key change to show beside, not over
              }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-7 d-flex flex-column justify-content-between" style={{ position: 'relative', zIndex: 1 }}>

          <h1 style={{textAlign:'center'}}>Details</h1>

          <div>
            <h3 className="fw-semibold">{data.state.title}</h3>
            <p className="text-muted mb-2">{data.state.text}</p>

            <div className="d-flex align-items-center mb-3">
              <span className="badge bg-success me-2">4.1★</span>
              <h4 className="me-2 mb-0 text-success">{data.state.price}</h4>
              <span className="text-muted text-decoration-line-through me-2">₹2,499</span>
              <span className="text-success fw-medium">64% off</span>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row gap-3 mt-3">
            <button className="btn btn-warning btn-lg w-100 w-sm-50" onClick={() =>addfun()}>🛒 Add to Cart</button>
            <button className="btn btn-danger btn-lg w-100 w-sm-50">⚡ Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
