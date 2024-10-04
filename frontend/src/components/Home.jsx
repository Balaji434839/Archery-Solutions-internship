/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Carousel from "../Slider";
import GalleryComponent from "../GalleryCompo";
import Footerpage from "../Footerpage";
import Card from "../Card";
import TabComponent from "../TabComponent";
import "aos/dist/aos.css";
import AOS from "aos";
import backG from "../assets/Logo.jpg"; // Import the video file
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./Darkmodetoggle";
import Dropdown from "./Dropdownhover";
import "../components/Home.css";
import Placeholder from "./placeholder";

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

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    // Fetch products from the backend
    fetch("/api/v1/userLogin")
      .then((res) => res.json())
      .then((data) => {
        console.log("Login:", data); // You can use the data here to display products dynamically
      })
      .catch((err) => console.error("Error login Credentials:", err));
  }, []);

  return (
    <>
      <div className="home-mod">
      
        {/* Header Section */}
        <div className="flex  mx-auto items-center justify-between h-[120px]  w-full bg-green-300">
          {/* Video instead of image for the logo */}
          <img
            src={backG}
            alt="logo"
            className="w-[80px] sm:w-[110px] mx-auto  "
          />
       
          {/* Hamburger Menu Button for Mobile */}
          <button className="text-white md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        <div className="w-[540px] mx-auto"><Placeholder/></div>  
          {/* Desktop Menu */}
          <div className="mx-auto space-x-4" style={{ fontFamily: "" }} />

          {/* Login and Sign Up Buttons for Desktop */}
          <div className="hidden space-x-6 md:flex">
            <div>
              <Dropdown />
            </div>
            {/* <DarkModeToggle /> */}
            <div className="button.liquid-btn "></div>
            <button className="relative px-4 py-1 overflow-hidden font-bold text-white bg-blue-100 rounded-lg cursor-pointer liquid-btn">
              <span className="relative z-10">
                <NavLink to="./login" className="no-underline">
                  Login
                </NavLink>
              </span>
              <div className="absolute"></div>
            </button>

            <button className="relative py-0 overflow-hidden font-bold text-white bg-blue-100 rounded-lg cursor-pointer right-4 px-7 liquid-btn">
              <span className="relative z-10">
                <NavLink to="./signup" className="no-underline">
                  SignUp
                </NavLink>
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
          <ol className="flex flex-col items-center py-4 mx-auto space-y-4 text-white">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">
              <NavLink to="./dashboard" className="no-underline">
                Dashboard
              </NavLink>
            </li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact Us</li>
            <button className="relative px-2 py-2 mt-3 overflow-hidden font-bold text-center text-white bg-blue-100 rounded-lg cursor-pointer w-/4 liquid-btn">
              <span className="relative z-10">
                <NavLink to="./login" className="no-underline">
                  Login
                </NavLink>
              </span>
              <div className="absolute"></div>
            </button>
            <button className="relative w-2/4 px-4 py-2 mt-4 overflow-hidden font-bold text-center text-white bg-blue-100 rounded-lg cursor-pointer liquid-btn">
              <span className="relative z-10">
                <NavLink to="./signup" className="no-underline">
                  Sign up
                </NavLink>
              </span>
              <div className="absolute"></div>
            </button>
          </ol>
        </div>
            <br/>
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
              onButtonClick={() => handleAddToCart({ name: "Apple Watch Series 7 GPS", price: 599 })}
            />
          </div>
          <div data-aos="fade-left">
            <Card
              image="../src/assets/product2.jpg"
              title="Samsung Galaxy Watch 4"
              price={399}
              rating={4.0}
              buttonText="Shop Now"
              onButtonClick={() => handleAddToCart({ name: "Samsung Galaxy Watch 4", price: 399 })}
            />
          </div>
          <div data-aos="fade-right">
            <Card
              image="../src/assets/product3.jpg"
              title="Garmin Fenix 6 Pro"
              price={699}
              rating={4.8}
              buttonText="Shop Now"
              onButtonClick={() => handleAddToCart({ name: "Garmin Fenix 6 Pro", price: 699 })}
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
