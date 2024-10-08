import express from 'express';
import { addProduct } from './controllers.js';

const router = express.Router();

// Route to add a new product
router.post('/products', addProduct);

export default router;
