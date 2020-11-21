const HTTPStatusCode = require('http-status-codes');
const AppError = require('../../../../../shared/errors/AppErrors');

const validateParams = ({ schema }) => async (req, res, next) => {
  try {
    await Promise.all(
      Object.keys(schema).map(async scope => {
        await schema[scope].validateAsync(req[scope]);
      }),
    );

    next();
  } catch (err) {
    throw new AppError(err.message, HTTPStatusCode.StatusCodes.BAD_REQUEST);
  }
};

module.exports = validateParams;
