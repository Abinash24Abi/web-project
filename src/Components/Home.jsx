import React, { useEffect, useState } from "react";
import Background from "./Background";
import arrow from "../assest/arrow_btn.png";
import playicon from "../assest/play_icon.png";
import pauseicon from "../assest/pause_icon.png";
import Cards from "./Cards";
import Footer from "./Footer";
import part4 from "../assest/part4.jpg";
import emi from "../assest/emi.webp";
import Aos from "aos";
import Part3 from "./Part3";
import ImgSlide from "./ImgSlide";
import Brand from "./Brand";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [picCount, setPinCount] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setPinCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);

  useEffect(() => {
    setInterval(() => {}, 5000);
  }, []);
  return (
    <>
      <div className="homecontainer" id="top">

        <Background picCount={picCount} play={play} />

        <a href="#top">
          <img src={arrow} alt="" className="arrow-img" />
        </a>

        <div className="hero-dot-play">
          <ul className="hero-dots">
            <li
              onClick={() => setPinCount(2)}
              className={picCount === 2 ? "hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setPinCount(1)}
              className={picCount === 1 ? "hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setPinCount(0)}
              className={picCount === 0 ? "hero-dot orange" : "hero-dot"}
            ></li>
          </ul>
          <div className="hero-play">
            <img
              onClick={() => setPlay(!play)}
              src={play ? pauseicon : playicon}
              alt=""
            />
            {/* <p>see the video</p> */}
          </div>
        </div>

        {/* <h1 className='mainHeader'> Find your dream watch on the leading marketplace for luxury watches...</h1> */}
      </div>

      <ImgSlide />
      <Cards />

      <Part3 />

      <img src={part4} width={"100%"} alt="img" />
      {/* <img src={emi}  width={'100%'}/> */}

      <Brand />

      <Footer />
    </>
  );
};

export default Home;
