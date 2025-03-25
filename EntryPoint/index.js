const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const orderRoutes = require("../Routers/Routers"); 

app.use(bodyParser.json()); 

const mongoURI = "mongodb+srv://Just_Me:iXaC9zdztuhLizSr@cluster0.mongodb.net/ordersDb?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api", orderRoutes); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});