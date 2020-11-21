const AppError = require('../../../errors/AppErrors');

// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, req, res, _) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', error: err.message });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return res
    .status(500)
    .json({ status: 'error', error: 'Internal server error' });
};

module.exports = errorMiddleware;
