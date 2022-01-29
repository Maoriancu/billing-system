const { Transaction } = require("../../models");

const logger = require("pino")();

const getAllTransactions = async (req, res) => {
  logger.info("initiating get-all-transactions route");

  try {
    const transactions = await Transaction.find();

    console.log(transactions)

    logger.info("got transactions");

    res.status(200).json(transactions);
  } catch (error) {
    logger.error("could not get transactions.", error.message);
    res.status(404).json({ message: error.message });
  }
};

module.exports = getAllTransactions;
