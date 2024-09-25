// index.js
import express from 'express';
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
import { config } from 'dotenv';
import cors from 'cors';
// Correct import statement in index.js
// import User from './src/models/User.js';
import LoginDB from './src/db/index.js';
import LoginRoutes from './src/routes/Login.Routes.js';



config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 2000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/joho';

// Registration Route
// app.post('/signup', async (req, res) => {
//   const { email, password } = req.body;

  // try {
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ message: 'User already exists', success: false });
    // }

//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     return res.status(201).json({ message: 'User registered successfully', success: true });
//   } catch (err) {
//     console.error('Error during registration:', err);
//     return res.status(500).json({ message: 'Server error', success: false });
//   }
// });

// Login Route
app.use('/api/v1/userSignout',LoginRoutes)
app.use('/api/v1/userSignup' ,LoginRoutes)
app.use('/api/v1/userLogin' ,LoginRoutes )


// Start Express Server

LoginDB(mongoURI).then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(()=>{
  console.log("Error in connecting");
})
