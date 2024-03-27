import React from "react";
import { FaBars } from "react-icons/fa6";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="container mx-auto px-12">
        <div className="navbar">
          <div className="nav-brand">
            <img
              src="https://pho99nepal.com/static/media/logo.e518715e88a00197730f.png"
              alt=""
            />
          </div>
          <div className="nav-menu">
            <a className="navlink active" href="">
              Home{" "}
            </a>
            <a className="navlink " href="">
              Pho99{" "}
            </a>
            <a className="navlink " href="">
              Menu{" "}
            </a>
            <a className="navlink " href="">
              Location{" "}
            </a>
            <a className="navlink " href="">
              Gallery{" "}
            </a>
            <a className="navlink " href="">
              Vacancy{" "}
            </a>
            <a className="navlink " href="">
              News{" "}
            </a>
            <a className="navlink " href="">
              Contact{" "}
            </a>
          </div>
          <div className="items-center justify-center">
            <div className="group relative cursor-pointer">
              <div className="flex items-center justify-between  menu-button">
                <div className="big-order"> Order from Foodmandu</div>
                <div className="small-order"> Order</div>
              </div>
              <div className="invisible absolute order-box flex flex-col gap-1.5 group-hover:visible">
                <a
                  href="https://foodmandu.com/Restaurant/Details/845"
                  target="_blank"
                >
                  Jhamshikhel
                </a>
                <a
                  href="https://foodmandu.com/Restaurant/Details/845"
                  target="_blank"
                >
                  Lazimpat
                </a>
                <a
                  href="https://foodmandu.com/Restaurant/Details/845"
                  target="_blank"
                >
                  Boudha
                </a>
              </div>
            </div>
          </div>
          <div className="mobile-bar">  <FaBars /></div>
          
        </div>
      </div>
    </>
  );
};

export default Header;
