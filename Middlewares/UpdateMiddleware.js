const Orders = require("./Entities/OrderEntitySchema");

exports.CheckBeforeUpdate = async (orderToUpdate, orderId) => {
  const existingOrder = await Orders.findOne({
    _id: orderId,
  });
  if (!existingOrder) {
    throw new Error("An order with this id not exists.");
  }

  const updatedFields = {};
  for (let [key, value] of Object.entries(orderToUpdate)) {
    if (value !== null && value !== "") {
      updatedFields[key] = value;
    }
  }

  return updatedFields;
};
