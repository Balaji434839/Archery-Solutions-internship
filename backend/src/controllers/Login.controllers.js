import User from "../models/User.js";

export async function Login(req,res){
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

export async function Signup(req,res){
  const { email, password } = req.body;

  try {
    const user = await User.updateOne({email});
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

export async function Signout(req,res){
const {email,password} = req.body;

try{
    const existingUser = await User.deleteOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists', success: false });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.delete();

    return res.status(200).json({ message: 'Signout successful', success: true });
    
  } catch (err) {
    console.error('Error during signout:', err);  
    return res.status(500).json({ message: 'Server error', success: false });
  }
}