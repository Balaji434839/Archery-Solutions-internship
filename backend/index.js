// index.js
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
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

// Login Route

app.use('/api/v1/userUpdatequantity',LoginRoutes)
app.use('/api/v1/userRemovefromcart',LoginRoutes)
app.use('/api/v1/userAddtocart',LoginRoutes)
app.use('/api/v1/userProductcard',LoginRoutes)
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
