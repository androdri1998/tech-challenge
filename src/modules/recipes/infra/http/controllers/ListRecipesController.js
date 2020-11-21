const HTTPStatusCode = require('http-status-codes');

const ListRecipesService = require('../../../services/ListRecipesService');
const RecipePuppyRepository = require('../../recipePuppy/repositories/RecipePuppyRepository');

class ListRecipesController {
  async index(req, res) {
    const { i: ingredients } = req.query;

    const recipePuppyRepository = new RecipePuppyRepository();
    const listRecipesService = new ListRecipesService(recipePuppyRepository);

    const listRecipes = await listRecipesService.execute({ ingredients });

    res.status(HTTPStatusCode.StatusCodes.OK).json(listRecipes);
  }
}

module.exports = ListRecipesController;
