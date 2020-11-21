const ListRecipesService = require('./ListRecipesService');
const FakeRecipesProvider = require('../providers/recipesProvider/fakes/FakeRecipesProvider');
const FakeRequestProvider = require('../../../shared/container/providers/RequestProvider/fakes/FakeRequestProvider');
const FakeGifsProvider = require('../../../shared/container/providers/GifsProvider/fakes/FakeGifsProvider');

let listRecipesService;
let fakeRecipesProvider;
let fakeRequestProvider;
let fakeGifsProvider;

describe('ListRecipesService', () => {
  beforeEach(() => {
    fakeRequestProvider = new FakeRequestProvider();
    fakeRecipesProvider = new FakeRecipesProvider(fakeRequestProvider);
    fakeGifsProvider = new FakeGifsProvider(fakeRequestProvider);
    listRecipesService = new ListRecipesService(
      fakeRecipesProvider,
      fakeGifsProvider,
    );
  });

  it('should be able to return recipes', async () => {
    const ingredients = ['onions', 'garlic'];

    const recipesReponseCheck = [
      {
        title: 'Title recipe 1',
        link: 'link recipe 1',
        ingredients: ['garlic', 'hot sauce', 'onions'],
        gif: 'link to giphy 1',
      },
      {
        title: 'Title recipe 2',
        link: 'link recipe 2',
        ingredients: ['garlic', 'mussels', 'onions'],
        gif: 'link to giphy 2',
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
