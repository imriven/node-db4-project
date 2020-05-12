
exports.up = function(knex) {
  return knex.schema.alterTable("recipe_ingredient", tbl => {
    tbl.float("quantity")
  })
  .createTable('steps', tbl => {
    tbl.increments();
    tbl.string("step_number")
    .notNullable()
    tbl.string("instruction")
    .notNullable()
    tbl.integer('recipe_id', 128)
    .unsigned()
    .notNullable()
    .references('id')
          // this table must exist already
    .inTable('recipes')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable("recipe_ingredient", tbl => {
    tbl.dropColumn("quantity")
  })
  .dropTableIfExists("steps")
};
