const Orders = require("../Entities/OrderEntitySchema");

exports.CheckBeforeGet = async (orderId) => {
  if (!orderId || orderId === "") {
    throw new Error("ID must not be null, empty, or undefined.");
  }
  const existingOrder = await Orders.findById(orderId);

  if (!existingOrder) {
    throw new Error("An order with this ID does not exist.");
  }
  return existingOrder;
};
exports.CheckBeforeGetAll = async () => {
  const orders = await Orders.find();
  if (orders.length === 0) {
    throw new Error(" base is empty.");
  }
  return orders;
};
