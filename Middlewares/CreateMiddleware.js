const Orders = require('./Entities/StudentEntitySchema'); 

exports.CheckBeforeCreate = async (tryOrder) => {
  for (let value of Object.values(tryOrder)) {
    if (value === null || value === undefined) {
      return new Error("All fields must have values (no null or undefined).");
    }
  }
  return null
};