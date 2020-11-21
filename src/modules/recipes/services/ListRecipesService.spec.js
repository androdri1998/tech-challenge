const ListRecipesService = require('./ListRecipesService');
const FakeRecipeRepository = require('../repositories/fakes/FakeRecipeRepository');

let listRecipesService;
let fakeRecipeRepository;

describe('ListRecipesService', () => {
  beforeEach(() => {
    fakeRecipeRepository = new FakeRecipeRepository();
    listRecipesService = new ListRecipesService(fakeRecipeRepository);
  });

  it('should be able to return recipes', async () => {
    const ingredients = ['onions', 'garlic'];

    const recipesReponseCheck = [
      {
        title:
          'Roasted Garlic Grilling Sauce \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n',
        link:
          'http://www.kraftfoods.com/kf/recipes/roasted-garlic-grilling-sauce-56344.aspx',
        ingredients: ['garlic', 'hot sauce', 'onions'],
        gif: 'http://img.recipepuppy.com/634118.jpg',
      },
      {
        title: 'Steamed Mussels I',
        link: 'http://allrecipes.com/Recipe/Steamed-Mussels-I/Detail.aspx',
        ingredients: ['garlic', 'mussels', 'onions'],
        gif: 'http://img.recipepuppy.com/29318.jpg',
      },
    ];

    const listRecipes = await listRecipesService.execute({ ingredients });

    expect(listRecipes).toHaveProperty('keywords');
    expect(listRecipes.keywords).toEqual(['garlic', 'onions']);
    expect(listRecipes).toHaveProperty('recipes');
    expect(listRecipes.recipes.length).toBe(2);
    expect(listRecipes.recipes).toEqual(recipesReponseCheck);
  });
});
