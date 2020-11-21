class ListRecipesService {
  constructor(recipeRepository) {
    this.recipeRepository = recipeRepository;
  }

  async execute({ ingredients }) {
    const recipes = await this.recipeRepository.findRecipesByIngredients({
      ingredients,
    });

    const recipeSerialized = recipes.map(recipe => {
      const arrIngredients = recipe.ingredients.split(',');
      const ingredientsTrimed = arrIngredients.map(ingredient =>
        ingredient.trim(),
      );
      const ingredientsSorted = ingredientsTrimed.sort();

      return {
        title: recipe.title,
        ingredients: ingredientsSorted,
        link: recipe.href,
        gif: recipe.thumbnail,
      };
    });

    return {
      keywords: ingredients.sort(),
      recipes: recipeSerialized,
    };
  }
}

module.exports = ListRecipesService;
