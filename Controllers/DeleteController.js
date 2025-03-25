const express = require("express");
const router = express.Router();
const CheckBeforeDelete = require("../Middlewares/DeleteMiddleware");

exports.DeleteConcreteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedOrder = await CheckBeforeDelete.CheckBeforeDelete(id);
    res.status(200).json({
      message: "Successfully deleted order.",
      deletedOrder,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error occurred while deleting the requested order.",
      error: error.message,
    });
  }
};
