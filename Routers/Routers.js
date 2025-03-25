const express = require("express");
const router = express.Router();
const UserController = require("../Controllers");
const CheckBeforeCreate = require("../Middlewares/CreateMiddleware");
const CheckBeforeUpdate = require("../Middlewares/UpdateMiddleware");
const CheckBeforeDelete = require("../Middlewares/DeleteMiddleware");
const CheckBeforeDeleteAll = require("../Middlewares/DeleteAllMiddleware");
const CheckBeforeGet = require("../Middlewares/ReadMiddleware");
const CheckBeforeGetAll = require("../Middlewares/ReadAllMiddleware");

router.post(
  "/orders",
  CheckBeforeCreate.CheckBeforeCreate,
  UserController.CreateConcreteOrder
);

router.get(
  "/orders/:id",
  CheckBeforeGet.CheckBeforeGet,
  UserController.GetConcreteOrder
);

router.get(
  "/orders",
  CheckBeforeGetAll.CheckBeforeGetAll,
  UserController.GetAllOrders
);

router.put(
  "/orders/:id",
  CheckBeforeUpdate.CheckBeforeUpdate,
  UserController.UpdateConcreteOrder
);

router.delete(
  "/orders/:id",
  CheckBeforeDelete.CheckBeforeDelete,
  UserController.DeleteConcreteOrder
);

router.delete(
  "/orders",
  CheckBeforeDeleteAll.CheckBeforeDeleteAll,
  UserController.DeleteAllOrders
);

module.exports = router;
