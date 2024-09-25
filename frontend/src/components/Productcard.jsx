/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './magicAnimation.css'; // Import the CSS file for animations and styles

function Productcard() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle) => {
        const speed = particle.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        particle.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen relative overflow-hidden bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      {/* Background particles */}
      <div className="particle particle1" data-speed="3"></div>
      <div className="particle particle2" data-speed="6"></div>
      <div className="particle particle3" data-speed="9"></div>
      <div className="particle particle4" data-speed="12"></div>
      <div className="particle particle5" data-speed="15"></div>
      <div className="particle particle6" data-speed="18"></div>
      <div className="particle particle7" data-speed="18"></div>
      <div className="particle particle8" data-speed="18"></div>

      {/* Main Product Card */}
      <div className="glass-effect p-9 relative z-10">
        <div className="glass-content">
          <label className="flex items-center w-full h-10 font-serif font-extrabold checkout-cart-title">
            Check out Cart
          </label>
          <div className="products">
            <div className="flex items-center space-x-3 product bg-white p-4 rounded-lg shadow-md">
              <svg
                fill="none"
                viewBox="0 0 60 60"
                height="60"
                width="60"
                xmlns="http://www.w3.org/2000/svg"
                className="text-orange-500"
              >
                <rect fill="#FFF6EE" rx="8.25" height="60" width="60"></rect>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.25"
                  stroke="#FF8413"
                  fill="#FFB672"
                  d="M34.2812 18H25.7189C21.9755 18 18.7931 20.5252 17.6294 24.0434C17.2463 25.2017 17.0547 25.7808 17.536 26.3904C18.0172 27 18.8007 27 20.3675 27H39.6325C41.1993 27 41.9827 27 42.4639 26.3904C42.9453 25.7808 42.7538 25.2017 42.3707 24.0434C41.207 20.5252 38.0246 18 34.2812 18Z"
                ></path>
                <path
                  fill="#FFB672"
                  d="M18 36H17.25C16.0074 36 15 34.9926 15 33.75C15 32.5074 16.0074 31.5 17.25 31.5H29.0916C29.6839 31.5 30.263 31.6754 30.7557 32.0039L33.668 33.9453C34.1718 34.2812 34.8282 34.2812 35.332 33.9453L38.2443 32.0039C38.7371 31.6754 39.3161 31.5 39.9084 31.5H42.75C43.9926 31.5 45 32.5074 45 33.75C45 34.9926 43.9926 36 42.75 36H42M18 36L18.6479 38.5914C19.1487 40.5947 20.9486 42 23.0135 42H36.9865C39.0514 42 40.8513 40.5947 41.3521 38.5914L42 36M18 36H28.5ZM42 36H39.75Z"
                ></path>
              </svg>
              <div>
                <span>Cheese Burger</span>
                <p>Extra Spicy</p>
                <p>No mayo</p>
              </div>
              <div className="flex items-center space-x-2 quantity">
                <button className="p-1 hover:bg-blue-900 hover:text-white transition-all duration-300 rounded-full transform hover:scale-110">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="5"
                      stroke="#47484b"
                      d="M20 12L4 12"
                    ></path>
                  </svg>
                </button>
                <label className="text-lg">2</label>
                <button className="p-1 hover:bg-blue-900 hover:text-white transition-all duration-300 rounded-full transform hover:scale-110">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="5"
                      stroke="#47484b"
                      d="M12 4V20M20 12H4"
                    ></path>
                  </svg>
                </button>
              </div>
              <label className="text-xl font-black text-zinc-800">$23.99</label>
            </div>
          </div>
        </div>

        <div className="rounded-md mt-5">
          <label className="block text-xs font-bold apply-discount-label">
            Apply Discount
          </label>
          <form className="flex space-x-2 mt-2">
            <input
              type="text"
              placeholder="Apply discount here"
              className="w-full p-2 rounded border border-gray-300"
            />
            <button className="p-2 apply-discount-button rounded hover:bg-blue-900 transition-all duration-300 transform hover:scale-110">
              Apply
            </button>
          </form>
        </div>

        <div className="grid bg-white shadow-lg mt-5 p-5 rounded-3xl">
          <label className="text-xs font-bold checkout-label">
            Checkout
          </label>
          <div className="mt-3">
            <span>Your Product Cost: $47.99</span>
            <br />
            <span>Discount applied: -$3.99</span>
            <br />
            <span>Shipping fees: $4.99</span>
          </div>
          <div className="flex justify-between items-center mt-3">
            <label className="text-xl font-black">
              <sup>$</sup>57.99
            </label>
            <button className="p-3 checkout-button rounded-xl shadow-inner hover:bg-blue-900 transition-all duration-300 transform hover:scale-110">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
