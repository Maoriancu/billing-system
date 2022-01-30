const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  transactions: { type: Array, default: [] }, // Array of ids of the transactions that the customer made.
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  email: { type: String, default: "" },
  gender: { type: String, default: "" },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
