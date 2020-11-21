const { Router } = require('express');

const ListRecipesController = require('../controllers/ListRecipesController');

const recipesRouter = Router();
const listRecipesController = new ListRecipesController();

recipesRouter.get('/', listRecipesController.index);

module.exports = recipesRouter;
