import React from "react";
import Banner from "../components/Banner";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <br />
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={3}
      >
        <div style={{ height: "400px", color: "#fff" }}>
          <img src="carrots.jpg" alt="carouse1" />
        </div>
        <div style={{ height: "400px", color: "#fff" }}>
          <img src="noodle.jpg" alt="carouse2" />
        </div>
        <div style={{ height: "400px", color: "#fff" }}>
          <img src="vegetable.jpg" alt="carouse3" />
        </div>
      </Carousel>
      <div className="home__slider"></div>
    </div>
  );
};

export default Home;
