const express = require("express");
const router = express.Router();
const CheckBeforeGet = require("../Middlewares/ReadMiddleware");

exports.GetConcreteOrder = async (req, res) => {
  const orderID = req.params.id;

  try {
    const requestedOrder = await CheckBeforeGet.CheckBeforeGet(orderID);

    res.status(200).json({
      message: "Successfully fetched order by ID.",
      requestedOrder,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error occurred while checking order byu requested ID.",
      error: error.message,
    });
  }
};
