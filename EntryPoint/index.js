const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const orderRoutes = require("./Routers"); 


app.use(bodyParser.json()); 

mongoose.connect("mongodb://localhost:27017/ordersDb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.use("/api", orderRoutes); 


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});