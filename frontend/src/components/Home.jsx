/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Carousel from "../Slider";
import GalleryComponent from "../GalleryCompo";
import Footerpage from "../Footerpage";
import Card from "../Card";
import TabComponent from "../TabComponent";
import "aos/dist/aos.css";
import AOS from "aos";
import backG from "../assets/Logo.jpg";
import { NavLink } from "react-router-dom";
import  DarkModeToggle from "./Darkmodetoggle";
import Dropdown from "./Dropdownhover";
import "./Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu
  const [cart, setCart] = useState([]); // State to manage cart items

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
       <div className="home-mod">
        {/* Header Section */}
    
        <div className="flex items-center justify-between h-[150px] px-4 sm:px-6 md:px-8 bg-gradient-to-t from-blue-600 to-black">
          <img
            src={backG}
            alt="logo"
            className="w-[80px] sm:w-[100px] bg-gradient-to-t from-blue-600 via-white to-black"
          />

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="text-white md:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div
            className="mx-auto space-x-4 text-red-50"
            style={{ fontFamily: "" }}
          />
          
          <Dropdown/>
       
          {/* Login and Sign Up Buttons for Desktop */}
          <div className="hidden space-x-2 md:flex"> <div className="button.liquid-btn">  <DarkModeToggle /></div>
            <button className="relative px-5 py-1 mb-5 overflow-hidden font-bold text-white bg-blue-600 rounded-lg cursor-pointer liquid-btn">
              <span className="relative z-10">
              <NavLink to="./login" className="no-underline">
             Login
              </NavLink>
            </span>
              <div className="absolute"></div>
            </button>

            <button className="relative px-6 py-1 mb-5 overflow-hidden font-bold text-white bg-blue-600 rounded-lg cursor-pointer liquid-btn">
              <span className="relative z-10">
                <NavLink to="./signup" className="no-underline">SignUp</NavLink>
                </span>
              <div className="absolute"></div>
            </button>
            
          </div>
        </div>

        {/* Mobile Menu (Visible on mobile and tablet screens) */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } bg-blue-600`}
        >
          <ol className="flex flex-col items-center py-4 space-y-4 text-white">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact Us</li>
            <button className="relative px-2 py-2 mt-3 overflow-hidden font-bold text-center text-white bg-blue-600 rounded-lg cursor-pointer w-/4 liquid-btn">
            <span className="relative z-10">Login</span>        
            <div className="absolute"></div>
            </button>
            <button className="relative w-2/4 px-4 py-2 mt-4 overflow-hidden font-bold text-center text-white bg-blue-600 rounded-lg cursor-pointer liquid-btn">
            <span className="relative z-10">Sign Up</span>
            <div className="absolute"></div>
            </button>
          </ol>
        </div>

        <br />
        <br />

        {/* Carousel Section */}
        <div>
          <Carousel />
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 sm:px-6 md:px-8 py-9">
          <div data-aos="fade-right">
            <Card
              image="../src/assets/product1.jpg"
              title="Apple Watch Series 7 GPS, Aluminium Case"
              price={599}
              rating={4.5}
              buttonText="Shop Now"
              onButtonClick={() => handleAddToCart({
                name: "Apple Watch Series 7 GPS",
                price: 599
              })}
            />
          </div>
          <div data-aos="fade-left">
            <Card
              image="../src/assets/product2.jpg"
              title="Samsung Galaxy Watch 4"
              price={399}
              rating={4.0}
              buttonText="Shop Now"
              onButtonClick={() => handleAddToCart({
                name: "Samsung Galaxy Watch 4",
                price: 399
              })}
            />
          </div>
          <div data-aos="fade-right">
            <Card
              image="../src/assets/product3.jpg"
              title="Garmin Fenix 6 Pro"
              price={699}
              rating={4.8}
              buttonText="Shop Now"
              onButtonClick={() => handleAddToCart({
                name: "Garmin Fenix 6 Pro",
                price: 699
              })}
            />
          </div>

          {/* Additional Product Cards */}
          <div data-aos="fade-left">
            <Card
              image="../src/assets/product5.jpg"
              title="Garmin Fenix 6 Pro"
              price={699}
              rating={4.8}
              buttonText="Shop Now"
              onButtonClick={() => handleAddToCart({
                name: "Garmin Fenix 6 Pro",
                price: 699
              })}
            />
          </div>
          <div data-aos="fade-right">
            <Card
              image="../src/assets/product4.jpg"
              title="Garmin Fenix 6 Pro"
              price={699}
              rating={4.8}
              buttonText="Shop Now"
              onButtonClick={() => handleAddToCart({
                name: "Garmin Fenix 6 Pro",
                price: 699
              })}
            />
          </div>
          <div data-aos="fade-left">
            <Card
              image="../src/assets/product8.jpg"
              title="Garmin Fenix 6 Pro"
              price={699}
              rating={4.8}
              buttonText="Shop Now"
              onButtonClick={() => handleAddToCart({
                name: "Garmin Fenix 6 Pro",
                price: 699
              })}
            />
          </div>
        </div>
   
        {/* Additional Components */}
        <GalleryComponent />
        <TabComponent />
        <Footerpage />
        </div>
  </>
  );
}

export default Home;
