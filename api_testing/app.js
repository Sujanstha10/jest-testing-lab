const express = require("express");
const app = express();
const db = require("./db.js");

app.use(express.json());

app.post("/users", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.sendStatus(400);
      return;
    }
    const user = await db.getUser(username);
    if (user) {
      res.status(400).send({ error: "username already taken" });
    }

    const userId = await db.createUser(username, password);
    res.send({ userId });
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = app;
