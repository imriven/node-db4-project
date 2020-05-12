const express = require('express');

const Recipes = require('./recipeDb.js');

const router = express.Router();

router.get('/', (req, res) => {
   Recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
  .then(ingredients => {
    if (ingredients) {
      res.json(ingredients);
    } else {
      res.status(404).json({ message: 'Could not find ingredients with given recipe id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get ingredients' });
  });
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
  .then(instructions => {
    if (instructions) {
      res.json(instructions);
    } else {
      res.status(404).json({ message: 'Could not find instructions with given recipe id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get instructions' });
  });
});



module.exports = router;