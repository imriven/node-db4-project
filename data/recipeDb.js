const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

function getRecipes() {
 return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipe_ingredient as r")
    .join("ingredients as i", "r.ingredient_id", "i.id")
    .select("i.ingredient_name", "r.quantity")
    .where({"r.recipe_id": recipe_id})
}

function getInstructions(recipe_id) {
    return db("steps")
    .where({recipe_id})
    .orderBy("step.step_number", "asc")
}

// export for use in codebase
module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};
