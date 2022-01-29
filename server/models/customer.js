const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const customerSchema = mongoose.Schema({
  customer_id: {
    type: String,
    default: uuidv4,
  },
  transactions: { type: Array, default: [] },
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  email: { type: String, default: "" },
  gender: { type: String, default: "" },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
