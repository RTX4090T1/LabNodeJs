const Orders = require("../Entities/OrderEntitySchema");

exports.CheckBeforeDelete = async (orderId) => {
  if (!orderId || orderId === "") {
    throw new Error("ID must not be null, empty, or undefined.");
  }

  const deletedOrder = await Orders.findByIdAndDelete(orderId);

  if (!deletedOrder) {
    throw new Error(
      "An order with this ID does not exist or has already been deleted."
    );
  }
  return deletedOrder;
};

exports.CheckBeforeDeleteAll = async () => {
  try {
    const orders = await Orders.find();
    if (orders.length === 0) {
      throw new Error("Order database is empty. Nothing to delete.");
    } else {
      await Orders.deleteMany(); 
    }
    return orders; 
  } catch (error) {
    throw new Error(
      `Error occurred while checking or deleting orders: ${error.message}`
    );
  }
};
