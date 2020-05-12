
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128)
        .notNullable();
        tbl.string('cooking_time', 128)
        .notNullable();
    })
    // we can chain together createTable
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128)
      .notNullable();
    })
    .createTable('recipe_ingredient', tbl => {
        tbl.integer('recipe_id')
          // forces integer to be positive
          .unsigned()
          .notNullable()
          .references('id')
          // this table must exist already
          .inTable('recipes')
          tbl.integer('ingredient_id')
          // forces integer to be positive
          .unsigned()
          .notNullable()
          .references('id')
          // this table must exist already
          .inTable('ingredients')
          tbl.primary(["recipe_id", "ingredient_id"])
      })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredient')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
