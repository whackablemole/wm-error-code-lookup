/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('codes', (table) => {
	table.increments(); // Creates id column
	table.string('code').notNullable().index().unique().primary();
	table.integer('severityId').notNullable();
	table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('codes');
};
