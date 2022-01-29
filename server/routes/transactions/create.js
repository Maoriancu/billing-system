const Joi = require('joi');
const validate = require('../../lib/joi-promise-validate');

const {
    Transaction
} = require('../../models');

const logger = require('pino')();

const schema = Joi.object().keys({
    customer_id: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    gender: Joi.string().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    street: Joi.string().required(),
    phone: Joi.string().required(),
    total_price: Joi.number().required(),
    currency: Joi.string().required(),
    credit_card_type: Joi.string().required(),
    credit_card_number: Joi.number().required(),
})

const create = async (req, res) => {
    try {
        const { isValid, error } = await validate(req.body, schema);
        if (!isValid) {
            logger.error('error with validate schema of create transaction', error);
            return res.json({ success: false, message: error });
        }

        const {
            body: { customer_id, first_name, last_name, email, gender, country, city, street, phone, total_price, currency, credit_card_type, credit_card_number },
        } = req;

        logger.info('initiating create transaction route', req);

        const transaction = {
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
        }

        await new Transaction(transaction).save();

        logger.info('done create transaction route', req);

        res.status(201).json({ success: true, message: 'Transaction created successfully.' });
    }
    catch (e) {
        logger.error(e.message);
        res.status(409).json({ success: false, message: e.message });
    }
}

module.exports = create;
