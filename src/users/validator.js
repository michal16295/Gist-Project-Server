const logger = require("../common/logger")(__filename);
const { validate } = require("../common/validator");
const Joi = require("joi");

const jOperation = Joi.string().min(1).max(50);
const jGender = Joi.string().min(1).max(50);
const jLanguage = Joi.string().min(1).max(20);
const jAge = Joi.number().min(1);

module.exports.create = (req, res, next) => {
  logger.debug("register validataion");
  const schema = Joi.object({
    operation: jOperation.required(),
    gender: jGender.required(),
    language: jLanguage.required(),
    age: jAge.required(),
  });

  validate(schema, req.body, res, next);
};
