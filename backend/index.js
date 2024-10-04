import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example user data (for login simulation)
const users = [
  { id: 1, username: "user1", password: "pass1" },
  { id: 2, username: "user2", password: "pass2" },
];

// Example product data (for the product cards)
const products = [
  { id: 1, name: "Apple Watch Series 7 GPS", price: 599 },
  { id: 2, name: "Samsung Galaxy Watch 4", price: 399 },
  { id: 3, name: "Garmin Fenix 6 Pro", price: 699 },
];

// API Routes
app.get("/api/v1/userLogin", (req, res) => {
  res.json(user);
});

app.post("/api/v1/userLogin", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ status: "success", userId: user.id });
  } else {
    res.status(401).json({ status: "error", message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
