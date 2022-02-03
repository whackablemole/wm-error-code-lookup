/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  knex.schema.createTable('descriptions', table => {
	 	table.increments();
	  	table.integer('code')
	  		.unsigned()
	  		.references('code')
			.inTable('codes')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table.string('language', 10)
			.notNullable()
			.references('iso')
			.inTable('languages')
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
	  table.text('description', 250).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	knex.schema.dropTableIfExists('descriptions');
};
