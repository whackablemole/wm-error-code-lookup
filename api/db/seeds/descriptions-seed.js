/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {code: "P0010", description: "Intake Camshaft Position Actuator Circuit/Open (Bank 1)", language: "en-GB"},
		{code: "P0011", description: "Intake Camshaft Position Timing - Over-Advanced (Bank 1)", language: "en-GB"},
		{code: "P2198", description: "O2 Sensor Signal Biased/Stuck Rich - Bank 2, Sensor 1", language: "en-GB"},
		{code: "P2257", description: "Secondary Air Injection (AIR) System Control A Circuit Low", language: "en-GB"},
		{code: "P2258", description: "Secondary Air Injection (AIR) System Control A Circuit High", language: "en-GB"},
		{code: "P2270", description: " (PCM) - O2 Sensor Signal Stuck Lean - Bank 1, Sensor 2", language: "en-GB"},
		{code: "P2271", description: "O2 Sensor Signal Stuck Rich - Bank 1, Sensor 2", language: "en-GB"},
		{code: "P2272", description: "O2 Sensor Signal Stuck Lean - Bank 2, Sensor 2 ", language: "en-GB"},
		{code: "P2273", description: "O2 Sensor Signal Stuck Rich - Bank 2, Sensor 2 ", language: "en-GB"},
		{code: "P2274", description: "O2 Sensor Signal Stuck Lean - Bank 1, Sensor 3", language: "en-GB"},
		{code: "P0012", description: "Intake Camshaft Position Timing - Over-Retarded (Bank 1)", language: "en-GB"},
		{code: "P0016", description: "Crankshaft Position - Camshaft Position Correlation - Bank 1 Sensor A", language: "en-GB"},
		{code: "P0018", description: "Crankshaft Position - Camshaft Position Correlation - Bank 2 Sensor A", language: "en-GB"},
		{code: "P0020", description: "Intake Camshaft Position Actuator Circuit/Open (Bank 2)", language: "en-GB"},
		{code: "P0021", description: "Intake Camshaft Position Timing - Over-Advanced (Bank 2)", language: "en-GB"},
		{code: "P0022", description: "Intake Camshaft Position Timing - Over-Retarded (Bank 2) ", language: "en-GB"},
		{code: "P0040", description: "Oxygen Sensor Signals Swapped Bank 1 Sensor 1/Bank 2 Sensor 1", language: "en-GB"},
		{code: "P0041", description: "Oxygen Sensor Signals Swapped Bank 1 Sensor 2/Bank 2 Sensor 2", language: "en-GB"},
		{code: "P0053", description: "HO2S Heater Resistance (Bank 1, Sensor 1) ", language: "en-GB"},
		{code: "P0054", description: "HO2S Heater Resistance (Bank 1, Sensor 2)", language: "en-GB"},
		{code: "P0055", description: "HO2S Heater Resistance (Bank 1, Sensor 3) ", language: "en-GB"},
		{code: "P0059", description: "HO2S Heater Resistance (Bank 2, Sensor 1) ", language: "en-GB"},
		{code: "P0060", description: " HO2S Heater Resistance (Bank 2, Sensor 2)", language: "en-GB"},
		{code: "P0068", description: "Manifold Absolute Pressure (MAP)/Mass Air Flow (MAF) - Throttle Position Correlation ", language: "en-GB"},
		{code: "P0102", description: "Mass or Volume Air Flow A Circuit Low ", language: "en-GB"},
      ]);
    });
};
