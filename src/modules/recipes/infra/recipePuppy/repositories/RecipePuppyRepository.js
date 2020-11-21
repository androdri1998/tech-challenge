const RequestProvider = require('../../../../../shared/container/providers/RequestProvider/implementation/AxiosProvider');

class RecipesPuppyRepository {
  async findRecipesByIngredients({ ingredients = [] }) {
    const requestProvider = new RequestProvider();
    const recipesResponse = await requestProvider.get({
      url: 'http://www.recipepuppy.com/api',
      params: { i: ingredients.join(',') },
    });

    return recipesResponse.data.results;
  }
}

module.exports = RecipesPuppyRepository;
