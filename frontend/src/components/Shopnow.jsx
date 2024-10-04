/* Shopnow.jsx */

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

// Example initial products array
const initialProducts = [
  {
    id: '1',
    name: 'Apple Watch Series 7 GPS',
    price: 599,
    quantity: 1,
    image: './src/assets/product1.jpg', // Replace with actual image URL
  },
  {
    id: '2',
    name: 'Samsung Galaxy Watch 4',
    price: 399,
    quantity: 1,
    image: './src/assets/product2.jpg', // Replace with actual image URL
  },
  {
    id: '3',
    name: 'Garmin Fenix 6 Pro',
    price: 699,
    quantity: 1,
    image: './src/assets/product3.jpg', // Replace with actual image URL
  },
  {
    id: '4',
    name: 'Garmin Fenix 6 Pro',
    price: 699,
    quantity: 1,
    image: './src/assets/product4.jpg', // Replace with actual image URL
  },
  // Add more products as necessary
];

// Main App Component
function Shopnow() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  // Update quantity of products in cart
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500">
      {/* Optional background image */}
      <div className="absolute inset-0 opacity-30">
  <img
    src="https://source.unsplash.com/1600x900/?shopping,mall" // Replace with any above URL
    alt="Background"
    className="object-cover w-full h-full"
  />
</div>

      
      <div className="relative px-4 py-8 mx-auto bg-transparent bg-opacity-100 rounded-lg shadow-lg backdrop-blur-lg">
        <h1 className="mb-6 text-4xl font-bold text-center text-white">My Shopping</h1>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
          {initialProducts.map((product) => (
            <motion.div 
              key={product.id} 
              className="p-4 transition-transform duration-300 bg-white border rounded-lg shadow-lg card hover:shadow-2xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={product.image} alt={product.name} className="object-cover w-full h-32 mb-4 rounded-lg" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-900">Price: ${product.price}</p>
              <button
                className="w-full px-4 py-2 mt-4 font-semibold text-white transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

        {/* View Cart Button */}
        <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 text-white transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
          View Cart
        </button>

        {/* Cart Modal */}
        <Modal 
          isOpen={isModalOpen} 
          onRequestClose={() => setIsModalOpen(false)} 
          className="w-full max-w-md p-6 mx-auto text-black transition-all duration-300 transform scale-100 bg-black rounded-lg shadow-lg opacity-100"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        >
          <h2 className="text-2xl font-bold">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-200">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="items-center justify-between p-4 my-2 transition-all duration-300 bg-white border rounded-lg shadow-lg scroll-auto cart-item"
                >
                  <img src={item.image} alt={item.name} className="object-cover w-24 h-16 rounded-lg" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="flex mt-2 space-x-2">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                        className="px-2 py-1 transition-all duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 transition-all duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="px-4 py-2 text-white transition-all duration-200 bg-red-500 rounded-lg hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="mt-4 text-lg font-bold">
                Total: $
                {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </div>
            </div>
          )}
          <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 mt-4 text-white transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default Shopnow;
