/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple password match validation
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log({ name, email, password });

    // Simulate success registration
    setTimeout(() => {
      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify({ name, email, password }));

      // Set success state to true
      setSuccess(true);

      // Redirect to login after a brief pause
      setTimeout(() => {
        navigate('/login'); // Redirect to login page
      }, 1500); // 1.5 seconds delay
    }, 1000);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {/* Background animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: `url('/your-bg-image.jpg')` }}
      />

      {success ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="flex flex-col items-center justify-center w-full max-w-sm p-8 shadow-2xl bg-white/80 backdrop-blur-sm rounded-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-4xl font-bold text-green-500"
          >
            🎉 Signup Successful!
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg font-medium text-center text-gray-700"
          >
            Welcome, {name}!
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full max-w-sm p-8 shadow-2xl bg-white/80 backdrop-blur-md rounded-xl"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-3xl font-extrabold text-center text-gray-900"
              >
                Sign Up
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative"
              >
                <label
                  htmlFor="name"
                  className="absolute left-2.5 top-3 text-sm font-medium text-gray-500"
                >
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-full p-2.5 transition-transform duration-300"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </motion.div>
            </div>

            <div className="mb-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative"
              >
                <label
                  htmlFor="email"
                  className="absolute left-2.5 top-3 text-sm font-medium text-gray-500"
                >
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-full p-2.5 transition-transform duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
            </div>

            <div className="mb-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="relative"
              >
                <label
                  htmlFor="password"
                  className="absolute left-2.5 top-3 text-sm font-medium text-gray-500"
                >
                  Your Password
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-full p-2.5 transition-transform duration-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </motion.div>
            </div>

            <div className="mb-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="relative"
              >
                <label
                  htmlFor="confirmPassword"
                  className="absolute left-2.5 top-3 text-sm font-medium text-gray-500"
                >
                  Confirm Password
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="password"
                  id="confirmPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-full p-2.5 transition-transform duration-300"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all"
            >
              Sign Up
            </motion.button>

            <p className="mt-4 text-sm text-center text-gray-600">
              Already have an account?{' '}
              <NavLink to="/home/login" className="text-blue-500 hover:underline">
                Log in
              </NavLink>
            </p>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default SignupForm;
