import React from "react";
import img1 from '../assest/brand/rolex_logo.avif'
import img2 from '../assest/brand/omega.avif'
import img3 from '../assest/brand/movado_logo.avif'
import img4 from '../assest/brand/longies_logo.avif'
import img5 from '../assest/brand/chopard_logo.avif'
import img6 from '../assest/brand/breitling_logo.avif'
import img7 from '../assest/brand/breguet_logo.avif'
import img8 from '../assest/brand/UN_logo.webp'
import img9 from '../assest/brand/Tudor__Uhrenmarke__logo_svg.avif'
import img10 from '../assest/brand/MB_logo_558582e6-61fd-41c3-b587-817b3e48bad9.avif'
import img11 from '../assest/brand/Logo_RGB_Digital-01.avif'
import img12 from '../assest/brand/Franck_Muller_logo.avif'
import img13 from '../assest/brand/JD_logo.avif'
import img14 from '../assest/brand/H_OFFICIAL-LOGO-POS.avif'
import img15 from '../assest/brand/Grand_seiko_Logo.avif'
import img16 from '../assest/brand/Blancpain_logo.webp'
import img17 from '../assest/brand/Bell_ross_logo.avif'
import img18 from '../assest/brand/BVLGARI_LOGO_eaa4c4aa-b3a7-492a-aebf-0583c0940501.webp'

import Marquee from 'react-fast-marquee'


// const brands = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18];

const brands1 = [img1,img2,img3,img4,img5,img6]
const brands2 = [img7,img8,img9,img10,img11,img12]
const brands3 = [img13,img14,img15,img16,img17,img18]

const Brand = () => {
  return (
    <div className="container-fluid py-5 text-center">
      <h3 className="mb-5" style={{fontSize:'3rem'}}>Brand list</h3>
      <div className="row g-4 justify-content-center">
      {/* <Marquee pauseOnHover>

        {brands.map((brand, index) => (
          
          <div
            key={index}
            // className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center"
          >
            <img
              src={brand}
              alt="img"
              className="img-fluid brand-logo"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
          </div>
          
        ))}
        </Marquee> */}


        <Marquee pauseOnHover>
          {brands1.map((brand,index) => 
           <div
           key={index}
           style={{margin:'0 6rem'}}
         >
           <img
             src={brand}
             alt="img"
             className="img-fluid brand-logo"
             style={{ maxHeight: "80px", objectFit: "contain" }}
           />
         </div>
        )}
        </Marquee>

        <Marquee pauseOnHover direction="right">
          {brands2.map((brand,index) => 
           <div
           key={index}
           style={{margin:'0 6rem'}}
         >
           <img
             src={brand}
             alt="img"
             className="img-fluid brand-logo"
             style={{ maxHeight: "80px", objectFit: "contain" }}
           />
         </div>
        )}
        </Marquee>


        <Marquee pauseOnHover>
          {brands3.map((brand,index) => 
           <div
           key={index}
           style={{margin:'0 6rem'}}
         >
           <img
             src={brand}
             alt="img"
             className="img-fluid brand-logo"
             style={{ maxHeight: "80px", objectFit: "contain" }}
           />
         </div>
        )}
        </Marquee>


      </div>
    </div>
  );
};

export default Brand;
