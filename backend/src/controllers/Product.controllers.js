import Product from '../models/Product.js';

// Example function to add a new product
export async function addProduct(req, res) {
  const { name, price, description, image, quantity, category } = req.body;

  try {
    const newProduct = new Product({ name, price, description, image, quantity, category });
    await newProduct.save();
    return res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (err) {
    console.error('Error adding product:', err);
    return res.status(500).json({ message: 'Server error', success: false });
  }
}
