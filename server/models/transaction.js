const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  customer_id: {
    type: String,
    default: "",
  },
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  email: { type: String, default: "" },
  gender: { type: String, default: "" },
  country: { type: String, default: "" },
  city: { type: String, default: "" },
  street: { type: String, default: "" },
  phone: { type: String, default: "" },
  total_price: { type: Number, default: 0 },
  currency: { type: String, default: "" },
  credit_card_type: { type: String, default: "" },
  credit_card_number: { type: Number, default: "" },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
