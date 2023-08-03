require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");

const express = require("express");
const app = express();

const foodRoutes = require("./routes/foodRoute");
const userRoutes = require("./routes/userRoute");

// ------------------------ Middleware ------------------------ \\
app.use(cors());
app.use(express.json()); // parses incoming json data and puts it into req.body

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ------------------------ Routes ------------------------ \\
app.use("/api/foods", foodRoutes);
app.use("/api/user", userRoutes);

// ------------------------ Connection ------------------------ \\
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to db");
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
