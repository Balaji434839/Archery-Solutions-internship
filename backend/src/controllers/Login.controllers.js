import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Product from '../models/Product.js';

export async function Login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials', success: false });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials', success: false });
    }

    return res.status(200).json({ message: 'Login successful', success: true });
  } catch (err) {
    console.error('Error during login:', err);
    return res.status(500).json({ message: 'Server error', success: false });
  }
}

export async function Signup(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: 'Email already exists', success: false });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'Signup successful', success: true });
  } catch (err) {
    console.error('Error during signup:', err);
    return res.status(500).json({ message: 'Server error', success: false });
  }
}

export async function Signout(req, res) {
  const { email } = req.body;

  try {
    const user = await User.findOneAndDelete({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found', success: false });
    }

    return res.status(200).json({ message: 'Signout successful', success: true });
  } catch (err) {
    console.error('Error during signout:', err);
    return res.status(500).json({ message: 'Server error', success: false });
  }
}

export async function Productcard(req, res) {
  const { product_id } = req.body;

  try {
    const product = await Product.findById(product_id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found', success: false });
    }

    return res.status(200).json({ product, success: true });
  } catch (err) {
    console.error('Error fetching product:', err);
    return res.status(500).json({ message: 'Server error', success: false });
  }
}

export async function Addtocart(req, res) {
  const { product_id } = req.body;

  try {
    const product = await Product.findById(product_id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found', success: false });
    }

    const cart = req.session.cart || [];
    const updatedCart = cart.map((item) => {
      if (item.product_id === product_id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    req.session.cart = updatedCart;
    return res.status(200).json({ updatedCart, success: true });
  } catch (err) {
    console.error('Error adding to cart:', err);
    return res.status(500).json({ message: 'Server error', success: false });
  }
}

export async function Removefromcart(req, res) {
  const { product_id } = req.body;

  try {
    const cart = req.session.cart || [];
    const updatedCart = cart.filter((item) => item.product_id !== product_id);

    req.session.cart = updatedCart;
    return res.status(200).json({ updatedCart, success: true });
  } catch (err) {
    console.error('Error removing from cart:', err);
    return res.status(500).json({ message: 'Server error', success: false });
  }
}

export async function Updatequantity(req, res) {
  const { product_id, quantity } = req.body;

  try {
    const cart = req.session.cart || [];
    const updatedCart = cart.map((item) => {
      if (item.product_id === product_id) {
        return { ...item, quantity };
      }
      return item;
    });

    req.session.cart = updatedCart;
    return res.status(200).json({ updatedCart, success: true });
  } catch (err) {
    console.error('Error updating cart quantity:', err);
    return res.status(500).json({ message: 'Server error', success: false });
  }
}
