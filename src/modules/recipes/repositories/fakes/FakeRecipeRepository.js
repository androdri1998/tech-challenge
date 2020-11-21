class FakeRecipeRepository {
  findRecipesByIngredients({ ingredients = [] }) {
    return [
      {
        title:
          'Roasted Garlic Grilling Sauce \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n',
        href:
          'http://www.kraftfoods.com/kf/recipes/roasted-garlic-grilling-sauce-56344.aspx',
        ingredients: 'garlic, onions, hot sauce',
        thumbnail: 'http://img.recipepuppy.com/634118.jpg',
      },
      {
        title: 'Steamed Mussels I',
        href: 'http://allrecipes.com/Recipe/Steamed-Mussels-I/Detail.aspx',
        ingredients: 'garlic, mussels, onions',
        thumbnail: 'http://img.recipepuppy.com/29318.jpg',
      },
    ];
  }
}

module.exports = FakeRecipeRepository;
