const { Router } = require('express');

const recipesRouter = require('../../../../modules/recipes/infra/http/routes/recipes');

const routes = Router();

routes.use('/recipes', recipesRouter);

module.exports = routes;
