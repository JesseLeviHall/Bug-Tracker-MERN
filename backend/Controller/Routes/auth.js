const { post } = require("request");
const userModel = require("../../Model/userModel");

const route = require("express").Router();

route.post("/user", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => {
      if (!user) return res.status(400).send("there was an error");
      res.send("created user");
    })
    .catch((err) => res.status(400).send(err));
});

route
  .put("/user", (req, res) => {})

  .post("/", (req, res) => {})

  .get("/", (req, res) => {});
