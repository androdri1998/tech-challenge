const HTTPStatusCode = require('http-status-codes');

const ListRecipesService = require('../../../services/ListRecipesService');
const AxiosProvider = require('../../../../../shared/container/providers/RequestProvider/implementation/AxiosProvider');
const RecipePuppyProvider = require('../../../providers/recipesProvider/implementations/RecipePuppyProvider');
const GiphyProvider = require('../../../../../shared/container/providers/GifsProvider/implementations/GiphyProvider');

class ListRecipesController {
  async index(req, res) {
    const { i: ingredients } = req.query;

    const axiosProvider = new AxiosProvider();
    const recipePuppyProvider = new RecipePuppyProvider(axiosProvider);
    const giphyProvider = new GiphyProvider(axiosProvider);
    const listRecipesService = new ListRecipesService(
      recipePuppyProvider,
      giphyProvider,
    );

    const listRecipes = await listRecipesService.execute({ ingredients });

    res.status(HTTPStatusCode.StatusCodes.OK).json(listRecipes);
  }
}

module.exports = ListRecipesController;
