const Joi = require("joi");
const validate = require("../../lib/joi-promise-validate");

const { Transaction } = require("../../models");

const logger = require("pino")();

const schema = Joi.object().keys({
  _id: Joi.string().required(),
  customer_id: Joi.string(),
  first_name: Joi.string(),
  last_name: Joi.string(),
  email: Joi.string(),
  gender: Joi.string(),
  country: Joi.string(),
  city: Joi.string(),
  street: Joi.string(),
  phone: Joi.string(),
  total_price: Joi.number(),
  currency: Joi.string(),
  credit_card_type: Joi.string(),
  credit_card_number: Joi.number(),
});

const updateTransaction = async (req, res) => {
  try {
    const { isValid, error } = await validate(req.body, schema);
    if (!isValid) {
      logger.error("error with validate schema of update transaction", error);
      return res.json({ success: false, message: error });
    }

    const {
      body: {
        _id,
        customer_id,
        first_name,
        last_name,
        email,
        gender,
        country,
        city,
        street,
        phone,
        total_price,
        currency,
        credit_card_type,
        credit_card_number,
      },
    } = req;

    logger.info("initiating update transaction route");

    const updatedTransaction = {
      customer_id,
      first_name,
      last_name,
      email,
      gender,
      country,
      city,
      street,
      phone,
      total_price,
      currency,
      credit_card_type,
      credit_card_number,
    };

    await Transaction.findByIdAndUpdate(_id, updatedTransaction);

    logger.info("done updating transaction route");

    res.status(201).json({ success: true, message: "Transaction updated successfully." });
  } catch (e) {
    logger.error(e.message);
    res.status(409).json({ success: false, message: e.message });
  }
};

module.exports = updateTransaction;
