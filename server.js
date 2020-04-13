const express = require("express");
const connectDB = require("./config/db");
const mongoose = require("mongoose");

const app = express();

//Database Connection
connectDB();

//Initialize middleware
app.use(express.json({ extended: false }));

//Defining Api's or backend routes
app.get("/", (req, res) => res.send("Api Running"));

app.use("/api/user/create", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

//Listen to port
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
