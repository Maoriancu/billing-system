const Joi = require("joi");

module.exports = (object, schema) =>
  new Promise((resolve) => {
    const { error } = schema.validate(object);
    if (error) return resolve({ isValid: false, error: error.toString() });
    resolve({ isValid: true });
  });
