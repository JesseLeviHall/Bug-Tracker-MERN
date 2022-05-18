const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  passowrd: String,
  role: String,
});

const model = mongoose.model("User", schema);

mododule.exports = model;
