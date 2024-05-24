import React from "react";
import "./menu.css";
import home from "../../assets/home.png";

const Menu = () => {
  return (
    <>
      <div className="container mx-auto px-12 menu section-margin ">
        <div className="menu">
          <div className="left">
            <div className="home-text">
              <div className="title">Our Menu</div>
              <div className="content">
                Savor the vibrant and authentic flavors of Vietnam with our
                carefully curated menu, featuring classic dishes and regional
                specialties.
              </div>
              <div className="button">See More</div>
            </div>
          </div>
          <div className="right">
          <div className="menu-outer">
          <div className="menu-box">
              <img src={home} alt="" />
              <div className="menu-text">
                <div className="title">aaa</div>
                <div className="detail">bbb</div>
                <div className="price">ccc</div>
              </div>
            </div>
            <div className="menu-box">
              <img src={home} alt="" />
              <div className="menu-text">
                <div className="title">aaa</div>
                <div className="detail">bbb</div>
                <div className="price">ccc</div>
              </div>
            </div>
            <div className="menu-box">
              <img src={home} alt="" />
              <div className="menu-text">
                <div className="title">aaa</div>
                <div className="detail">bbb</div>
                <div className="price">ccc</div>
              </div>
            </div>
            <div className="menu-box">
              <img src={home} alt="" />
              <div className="menu-text">
                <div className="title">aaa</div>
                <div className="detail">bbb</div>
                <div className="price">ccc</div>
              </div>
            </div>
            <div className="menu-box">
              <img src={home} alt="" />
              <div className="menu-text">
                <div className="title">aaa</div>
                <div className="detail">bbb</div>
                <div className="price">ccc</div>
              </div>
            </div>
            <div className="menu-box">
              <img src={home} alt="" />
              <div className="menu-text">
                <div className="title">aaa</div>
                <div className="detail">bbb</div>
                <div className="price">ccc</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
