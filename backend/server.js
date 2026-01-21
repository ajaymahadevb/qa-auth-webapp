const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const USER = {
  username: "admin",
  password: "admin123",
  email: "admin@gmail.com"
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ status: "error", message: "All fields required" });
  }

  if (username === USER.username && password === USER.password) {
    return res.json({ status: "success", message: "Login successful" });
  }

  res.json({ status: "error", message: "Invalid credentials" });
});

app.post("/forgot-password", (req, res) => {
  const { email } = req.body;

  if (email === USER.email) {
    return res.json({ status: "success", message: "Reset link sent" });
  }

  res.json({ status: "error", message: "Email not registered" });
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
