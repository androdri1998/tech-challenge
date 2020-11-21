const { Router } = require('express');

const validateParams = require('../middlewares/validateParams');
const { getRecipesSchema } = require('../schemas/recipes');

const ListRecipesController = require('../controllers/ListRecipesController');

const recipesRouter = Router();
const listRecipesController = new ListRecipesController();

recipesRouter.get(
  '/',
  validateParams({
    schema: getRecipesSchema,
  }),
  listRecipesController.index,
);

module.exports = recipesRouter;
