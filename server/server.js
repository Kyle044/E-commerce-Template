const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.URI;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database is Running"))
  .catch((err) => console.log("The Error is " + err));
const userRouter = require("./routes/User");
app.use("/api", userRouter);
app.listen(port, () => {
  console.log("Server Runs on Port : " + port);
});
