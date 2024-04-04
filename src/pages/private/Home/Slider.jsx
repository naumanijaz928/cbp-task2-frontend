import React from "react";
import { Button, Carousel } from "antd";
import Slide1 from "../../../assets/videos/slide1.mp4";
import Slide2 from "../../../assets/images/slide2.jpg";

import "./home.scss";
const SliderImages = () => (
  <Carousel autoplay className="Slider">
    <div id="slide1" className="slide">
      <video autoPlay muted loop>
        <source src={Slide1} />
      </video>
    </div>
    <div id="slide2" className="slide">
      {/* <img src={Slide2} /> */}
    </div>
    <div id="slide3" className="slide"></div>
  </Carousel>
);
export default SliderImages;
