const express = require("express");
const router = express.Router();
const CheckBeforeGetAll = require("../Middlewares/ReadMiddleware");

exports.GetAllOrders = async (_, res) => {
  try {
    const requestedOrders = await CheckBeforeGetAll.CheckBeforeGetAll();

    res.status(200).json({
      message: "Successfully fetched all orders.",
      requestedOrders,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error occurred while proceeding your request.",
      error: error.message,
    });
  }
};
