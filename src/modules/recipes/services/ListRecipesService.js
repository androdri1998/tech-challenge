class ListRecipesService {
  constructor(recipeProvider, gifProvider) {
    this.recipeProvider = recipeProvider;
    this.gifProvider = gifProvider;
  }

  async execute({ ingredients }) {
    const recipes = await this.recipeProvider.findRecipesByIngredients({
      ingredients,
    });

    const recipeSerialized = await Promise.all(
      recipes.map(async recipe => {
        const arrIngredients = recipe.ingredients.split(',');
        const ingredientsTrimed = arrIngredients.map(ingredient =>
          ingredient.trim(),
        );
        const ingredientsSorted = ingredientsTrimed.sort();

        const gif = await this.gifProvider.findGiphyByRecipeTitle({
          title: recipe.title,
        });
        const linkToGif = gif.images.preview_gif.url;

        return {
          title: recipe.title,
          ingredients: ingredientsSorted,
          link: recipe.href,
          gif: linkToGif,
        };
      }),
    );

    return {
      keywords: ingredients.sort(),
      recipes: recipeSerialized,
    };
  }
}

module.exports = ListRecipesService;
