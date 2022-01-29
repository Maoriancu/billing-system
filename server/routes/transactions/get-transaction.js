const { Transaction } = require("../../models");

const logger = require("pino")();

const getTransaction = async (req, res) => {
  const {
    body: { transaction_id },
  } = req;

  logger.info("initiating get-transaction route");

  try {
    const transaction = await Transaction.findById(transaction_id);

    logger.info("got transaction");

    res.status(200).json(transaction);
  } catch (error) {
    logger.error("could not get transaction.", error.message);
    res.status(404).json({ message: error.message });
  }
};

module.exports = getTransaction;
