/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink,useNavigate} from 'react-router-dom';

function Dashboard () {
    const navigate = useNavigate();
    const handleSignOut = () => {
        // Clear user session (this could be a token or session storage, depending on your implementation)
        sessionStorage.removeItem("userToken"); // Assuming token-based session
        navigate("/login"); // Redirect to login page
      };
    
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="w-64 p-5 space-y-8 bg-gray-800"
      >
        <div className="text-2xl font-bold text-white">
          My Dashboard
        </div>
        <nav className="space-y-4">
          <NavLink to="/home" className="block px-4 py-2 text-gray-300 transition rounded-lg hover:bg-gray-700 hover:text-white">
            Home
          </NavLink>
          <Link to="/profile" className="block px-4 py-2 text-gray-300 transition rounded-lg hover:bg-gray-700 hover:text-white">
            Profile
          </Link>
          <NavLink to="/login" className="block px-4 py-2 text-gray-300 transition rounded-lg hover:bg-gray-700 hover:text-white"
           onClick={handleSignOut}>         SignOut
          </NavLink>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between p-5 bg-white shadow"
        >
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              Notifications
            </button>
            <img
              className="w-10 h-10 border-2 border-gray-300 rounded-full"
              src="https://via.placeholder.com/150"
              alt="User"
            />
          </div>
        </motion.header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h2 className="mb-4 text-xl font-bold text-gray-700">Sales Overview</h2>
              <p className="text-gray-600">Total sales: $12,300</p>
              <p className="text-gray-500">Last month: +15%</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h2 className="mb-4 text-xl font-bold text-gray-700">User Growth</h2>
              <p className="text-gray-600">New users: 540</p>
              <p className="text-gray-500">This week: +8%</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h2 className="mb-4 text-xl font-bold text-gray-700">Traffic Source</h2>
              <p className="text-gray-600">Direct: 50%</p>
              <p className="text-gray-500">Referrals: 30%</p>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
