import express from "express";
import "../config/database.js";
import User from "./models/Users.js";

const app = express();

app.get('/', (req, res) => {
  res.send("Hello");
});

app.get('/users', async (req, res) => {
  const user = new User({
    username: "dimpram",
    noHP: "081289123",
    email: "dimas@gmail.com",
    password: "dimpram",
    refreshToken: ""
  })

  try {
    await user.save();
    return res.json(user);
  } catch (e) {
    return res.json(e);
  }

});

app.listen(5000, () => console.log(`Server running at http://localhost:5000`));