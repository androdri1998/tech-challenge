const recipesConfig = require('../../../../../config/recipes');

class RecipePuppyProvider {
  constructor(requestProvider) {
    this.requestProvider = requestProvider;
  }

  async findRecipesByIngredients({ ingredients = [] }) {
    const recipesResponse = await this.requestProvider.get({
      url: recipesConfig.url,
      params: { i: ingredients.join(',') },
    });

    return recipesResponse.data.results;
  }
}

module.exports = RecipePuppyProvider;
