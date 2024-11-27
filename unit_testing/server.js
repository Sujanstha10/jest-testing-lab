const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const validatePassword = require('./validatePassword.js')
app.post("/users", (req, res) => {
  const { name, password } = req.body;
  const validPassword = validatePassword(password);
  if (validPassword) {
    res.send({ message: "valid user" });
  } else {
    res.send({ message: "password invalid" });
  }
});

app.listen(3000, () => console.log("listening on port 3000"));
