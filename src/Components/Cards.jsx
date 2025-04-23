import React from "react";
import {useNavigate} from 'react-router-dom'
import { TbListDetails } from 'react-icons/tb'


import mw1 from "../assest/watch/balmain.jpg"
import mw2 from '../assest/watch/sw.webp'
import mw3 from '../assest/watch/citizen.jpg'
import mw4 from '../assest/watch/sonata.webp'
import mw5 from '../assest/watch/fastrack.webp'
import mw6 from '../assest/watch/movada.jpg'
import mw7 from '../assest/watch/seiko.jpg'
import mw8 from  '../assest/watch/tblack.jpg'


import "./Cards.css";

const cardsData = [
  { id: 1, img: mw1, title: "Analog Watch", text: "Stainless Steel Silver Plated Women's", price: 800 },
  { id: 2, img: mw2, title: "Smartwatch", text: "Titan Evoke Blue: Luminous AMOLED Display & Water-Resistant Smartwatch ", price: 1000 },
  { id: 3, img: mw3, title: "OnePlus Watch", text: "OnePlus Watch 2R with Wear OS 4", price: 1200 },
  { id: 4, img: mw4, title: "Sonata watch", text: "Sonata RPM Quartz Analog with Day and Date Beige Dial Leather Strap Watch for Men", price: 500 },
  { id: 5, img: mw5, title: "Fastrack", text: "Fastrack Radiant FX4 Premium Metal Smartwatch with 3.8 cm EdgeX AMOLED Display, Functional Crown", price: 2000 },
  { id: 6, img: mw6, title: "Noise Vortex ", text: "Noise Vortex Plus 1.46” AMOLED Display", price: 600 },
  { id: 7, img: mw7, title: "Noise Pro 6", text: "Intelligent AI, Endless AI Watch Faces", price: 800 },
  { id: 8, img: mw8, title: "Titan Neo ", text: "Quartz Multifunction White Dial Leather Strap", price: 800 },
];

const Cards = () => {

  const nav = useNavigate()
 

  return (
    <div className="cards-section py-5">
      <h1 className="text-center text-white fw-bold display-4 mb-5">🔥 Trending Collections</h1>
      <div className="card-container">
        <div className="row g-4">
          {cardsData.map((card) => (
            <div key={card.id} className="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
              <div className="card glass-card h-100 text-center p-5">
                <img
                  src={card.img}
                  className="mx-auto d-block mb-3 card-img-thumb"
                  alt={card.title}
                />
                <h5 className="fw-bold text-white card-title">{card.title}</h5>
                {/* <p className="text-light small card-text">{card.text}</p> */}
                <p className="text-white card-price">Rs: {card.price}</p>
                <button
                  className="btn gradient-btn "
                  onClick={() => nav('/addtocart',{state:card})}
                >
                  More Details {<TbListDetails />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
