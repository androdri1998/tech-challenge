const HTTPStatusCode = require('http-status-codes');

class ListRecipesController {
  async index(req, res) {
    res.status(HTTPStatusCode.StatusCodes.ACCEPTED).json({
      message: 'hello world',
    });
  }
}

module.exports = ListRecipesController;
