const express = require('express');

const RecipeRouter = require('./data/reciperouter.js');
const IngredientRouter = require('./data/ingredientRouter.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientRouter);

module.exports = server;