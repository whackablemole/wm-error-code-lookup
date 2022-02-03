/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('languages', table => {
	  table.increments(); // Creates id column
	  table.string('iso', 10).notNullable().primary().index();
	  table.string('name', 100).notNullable();
	  table.boolean('isActive').defaultTo(true);
	  table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('languages');
};
