/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import Axios

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Track if the form is for login or signup
  const [success, setSuccess] = useState(false); // Track form submission success
  const navigate = useNavigate(); // Initialize useNavigate

  // Retrieve stored user data from local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && isLogin) {
      setEmail(user.email);
      setPassword(user.password);
    }
  }, [isLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password, remember });

    try {
      const url = isLogin ? 'http://localhost:2000/login' : 'http://localhost:2000/signup';
      const response = await axios.post(url, { email, password });

      // Check if the operation was successful
      if (response.data.success) {
        setSuccess(true);
      } else {
        alert(response.data.message); // Show an alert if operation failed
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + (error.response?.data.message || 'Please try again later.'));
    }
  };

  // Redirect after showing success message
  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        navigate('/home'); // Redirect to another page after success
      }, 3000); // 3 seconds delay before redirect
    }

    return () => {
      clearTimeout(timer); // Clear timeout if component unmounts
    };
  }, [success, navigate]);

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, backgroundPosition: ['0% 50%', '100% 50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Success animation */}
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
            🎉 Success!
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg font-medium text-center text-gray-700"
          >
            You have successfully {isLogin ? 'logged in' : 'registered'}.
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
                {isLogin ? 'Login' : 'Sign Up'}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative"
              >
                <label
                  htmlFor="email"
                  className="absolute left-2.5 top-3 text-sm font-medium text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                >
                  Your email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-full p-2.5 transition-transform duration-300"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
            </div>

            <div className="relative mb-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative"
              >
                <label
                  htmlFor="password"
                  className="absolute left-2.5 top-3 text-sm font-medium text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                >
                  Your password
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="password"
                  id="password"
                  className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-full p-2.5 transition-transform duration-300"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center mb-5"
            >
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 transition-all border border-gray-300 rounded bg-gray-50 focus:ring-2 focus:ring-blue-500"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Remember me
              </label>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="relative w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all overflow-hidden"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute inset-0 z-0 w-full h-full transition-opacity duration-500 bg-blue-500 opacity-0 hover:opacity-20"
              />
              <span className="relative z-10">Submit</span>
            </motion.button>
          </form>
          <button
            className="mt-4 text-sm "
            onClick={() => setIsLogin(!isLogin)} // Toggle between login and signup
          >
            {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Login'}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default LoginForm;
