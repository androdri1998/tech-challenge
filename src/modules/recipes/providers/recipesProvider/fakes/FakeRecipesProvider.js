const recipesConfig = require('../../../../../config/recipes');

class FakeRecipesProvider {
  constructor(requestProvider) {
    this.requestProvider = requestProvider;
  }

  async findRecipesByIngredients({ ingredients = [] }) {
    await this.requestProvider.get({
      url: recipesConfig.url,
      params: { i: ingredients.join(',') },
    });

    return [
      {
        title: 'Title recipe 1',
        href: 'link recipe 1',
        ingredients: 'garlic, onions, hot sauce',
        thumbnail: 'link thumbnail recipe 1',
      },
      {
        title: 'Title recipe 2',
        href: 'link recipe 2',
        ingredients: 'garlic, mussels, onions',
        thumbnail: 'link thumbnail recipe 2',
      },
    ];
  }
}

module.exports = FakeRecipesProvider;
