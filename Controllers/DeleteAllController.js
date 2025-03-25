const express = require("express");
const router = express.Router();
const CheckBeforeDeleteAll = require("../Middlewares/DeleteMiddleware");

exports.DeleteAllOrders= async (_, res) => {
  try {
    await CheckBeforeDeleteAll.CheckBeforeDeleteAll();

    res.status(200).json({
      message: "Successfully deleted all orders.",
    });
  } catch (error) {
    res.status(404).json({
      message: "Error occurred while deleting orders.",
      error: error.message,
    });
  }
};
