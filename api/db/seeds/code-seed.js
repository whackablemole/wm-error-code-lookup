/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('codes').del()
    .then(function () {
      // Inserts seed entries
      return knex('codes').insert([
        {code: "P0010", severityId: 1},
		{code: "P0011", severityId: 2},
		{code: "P2198", severityId: 3},
		{code: "P2257", severityId: 1},
		{code: "P2258", severityId: 2},
		{code: "P2270", severityId: 3},
		{code: "P2271", severityId: 1},
		{code: "P2272", severityId: 2},
		{code: "P2273", severityId: 3},
		{code: "P2274", severityId: 1},
		{code: "P0012", severityId: 2},
		{code: "P0016", severityId: 3},
		{code: "P0018", severityId: 1},
		{code: "P0020", severityId: 2},
		{code: "P0021", severityId: 3},
		{code: "P0022", severityId: 1},
		{code: "P0040", severityId: 2},
		{code: "P0041", severityId: 3},
		{code: "P0053", severityId: 1},
		{code: "P0054", severityId: 2},
		{code: "P0055", severityId: 3},
		{code: "P0059", severityId: 1},
		{code: "P0060", severityId: 2},
		{code: "P0068", severityId: 3},
		{code: "P0102", severityId: 1},
      ]);
    });
};
