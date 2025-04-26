import React from "react";
import { useCart } from "react-use-cart";
import './CardInfo.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const CardInfo = () => {

  const nav = useNavigate()
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const clear = () => {
    emptyCart();
    setTimeout(async () => {
      const email = localStorage.getItem('useremail');
      const cartinfo = localStorage.getItem('react-use-cart');
      try {
        await axios.put('http://localhost:8989/updatecart', { email, cartinfo });
        console.log("Cart updated");
      } catch (err) {
        console.log('Error updating cart:', err);
      }
    }, 200);
  };

  if (isEmpty) {
    return (
      <div className="empty-container">
        <div className="emptymaincontainer">
          <h1 className="emptytext">The Cart is Empty</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="empty-container">
      <section className="py-4 container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="text-white mb-3 text-center">
              Cart: {totalUniqueItems} items, {totalItems} total
            </h2>

            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={item.img} alt={item.title} style={{ height: "6rem", width: "6rem" }} />
                      </td>
                      <td>{item.title}</td>
                      <td>₹ {item.price}</td>
                      <td>Qty: {item.quantity}</td>
                      <td>
                        <button className="btn btn-info m-1" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        <button className="btn btn-info m-1" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <button className="btn btn-danger m-1" onClick={() => removeItem(item.id)}>Remove</button>
                        <button className="btn btn-info" onClick={() => nav('/buyinfo',{state:item})}>Buy Now</button>
                      </td>
                  
                        
                   
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-between align-items-center mt-4 flex-wrap">
            <h3 className="text-white">Total Price: ₹ {cartTotal}</h3>
            <div>
              <button className="btn btn-danger me-2" onClick={clear}>Clear Cart</button>
              <button className="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardInfo;
