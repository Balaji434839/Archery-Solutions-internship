/* eslint-disable no-unused-vars */
// Card.jsx
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles

// Card component that displays product details
function Card({ image, title, price, rating, buttonText, onButtonClick }) {
  return (
    <div
      data-aos="fade-up" // Scroll animation using AOS (Fade Up on scroll)
      data-aos-duration="1000" // Duration of AOS animation
      className="w-full mx-auto overflow-hidden transition-transform duration-500 ease-in-out transform bg-white shadow-lg rounded-ss-3xl rounded-ee-2xl bg-gradient-to-br from-cyan-300 to-black hover:scale-105" // Card zoom on hover
    >
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-64 transition-transform duration-500 ease-in-out transform rounded-t-lg hover:scale-110" // Image zoom on hover
        />
        {/* Overlay for product info */}
        <div className="absolute bottom-0 left-0 flex items-end justify-center w-full h-full p-4 bg-gradient-to-t from-black to-transparent">
          <h5 className="text-xl font-bold text-white">{title}</h5>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6 text-center">
        {/* Rating */}
        <div className="flex items-center justify-center mb-3 space-x-2">
          <div className="flex items-center">
            {[...Array(Math.floor(rating))].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {rating}
          </span>
        </div>

        {/* Price */}
        <span className="block mb-4 text-3xl font-bold text-gray-900">
          ${price}
        </span>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          {/* Add to Cart Button */}
          <div
            className="relative w-[150px] h-[50px] bg-gray-300 flex items-center justify-center text-xl text-gray-800 font-sans rounded-[40px] cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[1px_-1px_10px_5px_rgba(159,228,228,0.29)] hover:text-gray-50 hover:animate-bounce" // Added bounce effect on hover
            onClick={onButtonClick}
          >
            <p className="z-10">
              <NavLink to="/product" className="no-underline">
             Add to Cart
              </NavLink>
            </p>
            <div className="absolute h-[140%] w-full bg-teal-600 bottom-0 right-10 translate-y-[7px] rounded-full transition-all duration-700 transform hover:scale-[7] hover:-translate-x-[20px]"></div>
          </div>

          {/* Action Button (Custom) */}
          <div
            className="relative w-[150px] h-[50px] bg-gray-300 flex items-center justify-center text-xl text-gray-800 font-sans rounded-[40px] cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[1px_-1px_10px_5px_rgba(159,228,228,0.29)] hover:text-gray-50 hover:animate-bounce" // Added bounce effect on hover
            onClick={onButtonClick}
          >
            
              <NavLink to="/Shopnow" className="z-10 ">{buttonText}</NavLink>
          
            <div className="absolute h-[140%] w-full bg-teal-600 bottom-0 right-10 translate-y-[7px] rounded-full transition-all duration-700 transform hover:scale-[7] hover:-translate-x-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Define prop types for the Card component
Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

export default Card;
