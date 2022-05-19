require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) return console.log("connected to DB");
    console.log(err);
  }
);

const app = express();

const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/auth", require("./Controller/Routes/auth"));

app.listen(PORT, () => {
  console.log("listening on " + PORT);
});
