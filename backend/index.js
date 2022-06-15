import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import viewBugs from "./Routes/viewbugs.js";
import userRouter from "./Routes/user.js";

const app = express();

app.use(express.json({ limit: "50000mb", extended: true }));
app.use(express.urlencoded({ limit: "50000mb", extended: true }));
app.use(cors());

app.use("/viewbugs", viewBugs);
app.use("/register", userRouter);

const PORT = process.env.PORT || 3500;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
