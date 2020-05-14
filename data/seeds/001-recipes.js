
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id:1, recipe_name: "Apple Pie", cooking_time: "2 hours"},
        {id:2, recipe_name: "Lamb Shanks", cooking_time: "4 hours"}
      ]);
    })
    .then(() => knex('ingredients').truncate())
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id:1, ingredient_name: "Apple"},
        {id:2, ingredient_name: "Lamb"},
        {id:3, ingredient_name: "Tomato"},
        {id:4, ingredient_name: "Sugar"}
      ]);
    })
    .then(() => knex('recipe_ingredient').truncate())
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        {recipe_id:1, ingredient_id:1, quantity: 3.5},
        {recipe_id:2, ingredient_id:2, quantity: 2.0},
        {recipe_id:2, ingredient_id:3, quantity: 2.0},
        {recipe_id:1, ingredient_id:4, quantity: 1.0}
      ]);
    })
    .then(() => knex('steps').truncate())
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id:1, step_number:"1", instruction: "boil apples"},
        {recipe_id:1, step_number:"3", instruction: "make crust"},
        {recipe_id:2, step_number:"1", instruction: "sear shanks"},
        {recipe_id:2, step_number:"2", instruction: "braise in wine and broth"},
        {recipe_id:2, step_number:"3", instruction: "slow cook for three hours"},
        {recipe_id:1, step_number:"2", instruction: "add sugar to boiled apples"}
      ]);
    });
};
