const express = require('express');

const Recipes = require('./recipeDb.js');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
   Recipes.getIngredients(req.params.id)
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});





module.exports = router;