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
    .orderBy("step_number", "asc")
}

function getIngredients(ingredient_id) {
    return db("recipe_ingredient as ri")
    .join("recipes as r",  "ri.recipe_id", "r.id")
    .select("r.recipe_name")
    .where({"ri.ingredient_id": ingredient_id})  
}

// SQL query for getIngredients
// SELECT r.recipe_name 
// FROM recipe_ingredient as ri 
// JOIN recipes as r 
// ON ri.recipe_id = r.id 
// WHERE ri.ingredient_id = 2

// export for use in codebase
module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getIngredients
};
