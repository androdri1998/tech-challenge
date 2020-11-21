const Joi = require('joi');

const getRecipesSchema = {
  query: Joi.object({
    i: Joi.array().items(Joi.string()).min(1).max(3).required(),
  }),
};

module.exports = {
  getRecipesSchema,
};
