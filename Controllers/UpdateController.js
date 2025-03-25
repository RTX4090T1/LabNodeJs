const express = require("express");
const router = express.Router();
const User = require("../Entities/OrderEntitySchema");
const CheckBeforeUpdate = require("../Middlewares/U_Middleware");

exports.UpdateConcreteOrder= async (req, res) => {
  const { id, name, company, clientEmail, companyEmail, cost} = req.body;

  try {
    const updatedFields = await CheckBeforeUpdate.CheckBeforeUpdate(req.body, id);

    if (Object.keys(updatedFields).length === 0) {
      return res.status(400).json({
        message: "No fields to update.",
      });
    }

    const updatedOrder = await User.findByIdAndUpdate(id, updatedFields, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found.",
      });
    }

    res.status(200).json({
      message: "Order updated successfully.",
      updatedOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the requested order.",
      error: error.message,
    });
  }
};