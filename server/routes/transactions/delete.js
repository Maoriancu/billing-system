const {
    Transaction
  } = require('../../models');
  
  const mongoose = require('mongoose');

const logger = require('pino')();
  
  const deleteTransaction = async (req, res) => {
    try {
        const {
            body: { _id },
        } = req;

        logger.info('initiating delete transaction route', req);

        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No transaction with id: ${_id} was found.`);

        await Transaction.findByIdAndRemove(_id);

        logger.info('done delete transaction route', req);
    
        res.json({ success: true, message: 'Transaction deleted successfully.' });
    }
    catch (e) {
      logger.error(e.message);
      res.json({ success: false, message: e.message });
    }
  }
  
  module.exports = deleteTransaction;
  