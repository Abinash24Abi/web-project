import React, { useState } from "react";
import './ImgSlide.css'
import {useNavigate} from 'react-router-dom'
import img1 from '../assest/slideImg/men.jpg'
import img2 from '../assest/slideImg/women.jpg'
import img3 from '../assest/slideImg/child.webp'
import img4 from '../assest/slideImg/img1.jpg'
import img5 from '../assest/slideImg/couple.jpg'

const items = [
  { label: "Men", src:img1 },
  { label: "Women", src:img2},
  { label: "Kids", src:img3},
  { label: "Couple", src: img5 },
  { label: "New Arrivals", src: img4 }
 
];

const ImgSlide = () => {

  const nav = useNavigate()

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="container-fluid py-5 text-center">
      <h2 className="mb-4 slideh2">
        THE BEST WAY TO BUY THE PRODUCTS YOU LOVE
      </h2>

      <div className="d-flex justify-content-center align-items-center gap-3 slidecontainer">
        <button
          className="btn btn-light rounded-circle"
          onClick={handlePrev}
          aria-label="Previous"
        >
          &#8249;
        </button>

        <div className="d-flex overflow-auto gap-4 px-3 slideimgcontainer">
          {items.map((item, index) => {
            const isSelected = index === selectedIndex;
            return (
              <div
                key={index}
                className="d-flex flex-column align-items-center"
                style={{ cursor: "pointer" }}
                onClick={() => {setSelectedIndex(index); nav('selectlist',{state:item.label})}}
              >
                <div
                  className={`rounded-circle overflow-hidden shadow imgview ${
                    isSelected ? "selected-img" : "small-img"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="img-fluid w-100 h-100 object-fit-cover slideimg"
                  />
                </div>
                <div className="mt-2 fw-medium small slideimgname">{item.label}</div>
              </div>
            );
          })}
        </div>

        <button
          className="btn btn-light rounded-circle"
          onClick={handleNext}
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImgSlide;
