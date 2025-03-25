const express = require("express");
const router = express.Router();
const User = require("../Entities/OrderEntitySchema");
const CheckBeforeAdd = require("../Middlewares/CreateMiddleware");

exports.CreateConcreteOrder = async (req, res) => {
  const {
    cost,
    name,
    company,
    clientName,
    clientEmail,
    companyEmail,
    avaragePoint,
  } = req.body;

  try {
    try {
      await CheckBeforeAdd.CheckBeforeCreate(req.body);
    } catch (error) {
      return res.status(409).json({
        message:
          "Error occurred while checking new entity. Check your request object, values must not be equal to 'null'.",
        error: error.message,
      });
    }
    const newOrder = new User({
      cost,
      name,
      company,
      clientName,
      clientEmail,
      companyEmail,
      avaragePoint,
    });
    await newOrder.save();
    res.status(201).json({
      message: "Order created successfully.",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "The request object was checked successfully, but an error occurred while adding the new order.",
      error: error.message,
    });
  }
};
