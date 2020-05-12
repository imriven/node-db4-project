const express = require('express');

const RecipeRouter = require('./data/reciperouter.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

module.exports = server;