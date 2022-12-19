const express = require("express");
const mongoose = require("mongoose");

//instalando cors 
const cors = require('cors');


require("dotenv").config();

const userRoute = require("./routes/user");

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api", userRoute);

// rutas
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// MONGO DB CONEXIÓN
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("El servidor está escuchando en el puerto", port));