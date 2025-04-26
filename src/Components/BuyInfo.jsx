// import React from 'react'
// import {useLocation} from 'react-router-dom'
// import './BuyInfo.css'

// const BuyInfo = () => {

//     const location = useLocation();
//     const data = location.state;
//     console.log(data)
//   return (
//     <div className=' buyinfo-container'>

//       <div className=' row align-items-center'>
      
//       <div className='col-6 d-flex justify-content-center'>
//         <img src={data.img} width={'600px'} height={'600px'} />
//       </div>

//       <div className='col-6'>

//         <div className='row'>

//             <div className='col-5 '><h1>Title</h1></div>
//             <div className='col-2 '> <h1>:</h1></div>
//             <div className='col-5 '><h1>{data.title} </h1></div>
            
//             <div className='col-5 '><h1>Price</h1></div>
//             <div className='col-2 '> <h1>:</h1></div>
//             <div className='col-5 '><h1>{data.price} </h1></div>

//             <div className='col-5'><h1>quantity</h1></div>
//             <div className='col-2'> <h1>:</h1></div>
//             <div className='col-5'><h1>{data.quantity} </h1></div>

//             <div className='col-12'><hr style={{ borderTop: '4px dashed #000', width:'90%' }}></hr></div>
   
//             <div className='col-5'> <h1>Total</h1> </div>
//             <div className='col-2'> <h1>:</h1></div>
//             <div className='col-5'><h1><h1>{data.quantity * data.price}</h1> </h1></div>

//             <div className='col-12 mt-3'><button  className='buyinfo-btn'>Pay Now</button></div>
            
            

//         </div>

//       </div>
        
//       </div>

//     </div>
//   )
// }

// export default BuyInfo




import React from 'react';
import { useLocation } from 'react-router-dom';
import './BuyInfo.css';

const BuyInfo = () => {
  const location = useLocation();
  const data = location.state;
  const userEmail = localStorage.getItem('useremail');

  const handlePayNow = async () => {
    const purchaseDetails = {
      email: userEmail,
      title: data.title,
      price: data.price,
      quantity: data.quantity,
      total: data.quantity * data.price,
      image: data.img
    };

    try {
      const res = await fetch('http://localhost:8989/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(purchaseDetails)
      });

      const result = await res.json();
      console.log('Email sent:', result);
      alert('Email sent successfully!');
    } catch (err) {
      console.error('Error sending email:', err);
    }
  };

  return (
    <div className="buyinfo-container">
      <div className="row align-items-center">
        <div className="col-6 d-flex justify-content-center">
          <img src={data.img} width={'600px'} height={'600px'} />
        </div>

        <div className="col-6">
          <div className="row">
            <div className="col-5"><h1>Title</h1></div>
            <div className="col-2"><h1>:</h1></div>
            <div className="col-5"><h1>{data.title}</h1></div>

            <div className="col-5"><h1>Price</h1></div>
            <div className="col-2"><h1>:</h1></div>
            <div className="col-5"><h1>{data.price}</h1></div>

            <div className="col-5"><h1>Quantity</h1></div>
            <div className="col-2"><h1>:</h1></div>
            <div className="col-5"><h1>{data.quantity}</h1></div>

            <div className="col-12"><hr style={{ borderTop: '4px dashed #000', width: '90%' }} /></div>

            <div className="col-5"><h1>Total</h1></div>
            <div className="col-2"><h1>:</h1></div>
            <div className="col-5"><h1>{data.quantity * data.price}</h1></div>

            <div className="col-12 mt-3">
              <button className="buyinfo-btn" onClick={handlePayNow}>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyInfo;
