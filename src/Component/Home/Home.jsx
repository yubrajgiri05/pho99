import React from "react";
import "./home.css";
import home from '../../assets/home.png'

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-12 home section-margin">
        <div className="grid  lg:grid-cols-2  md:grid-cols-1 gap-4">
          <div className="left">
          <div className="home-text">
              <div className="title">Welcome to PHO99</div>
              <div className="content">Savor the flavor of Vietnam</div>
              <div className="button">See Menu</div>
            </div>
          </div>
          <div className="right">
            <img src={home} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
