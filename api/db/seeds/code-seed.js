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
        {code: "P0010", description: "Intake Camshaft Position Actuator Circuit/Open (Bank 1)"},
		{code: "P0011", description: "Intake Camshaft Position Timing - Over-Advanced (Bank 1)"},
		{code: "P2198", description: "O2 Sensor Signal Biased/Stuck Rich - Bank 2, Sensor 1"},
		{code: "P2257", description: "Secondary Air Injection (AIR) System Control A Circuit Low"},
		{code: "P2258", description: "Secondary Air Injection (AIR) System Control A Circuit High"},
		{code: "P2270", description: " (PCM) - O2 Sensor Signal Stuck Lean - Bank 1, Sensor 2"},
		{code: "P2271", description: "O2 Sensor Signal Stuck Rich - Bank 1, Sensor 2"},
		{code: "P2272", description: "O2 Sensor Signal Stuck Lean - Bank 2, Sensor 2 "},
		{code: "P2273", description: "O2 Sensor Signal Stuck Rich - Bank 2, Sensor 2 "},
		{code: "P2274", description: "O2 Sensor Signal Stuck Lean - Bank 1, Sensor 3"},
		{code: "P0012", description: "Intake Camshaft Position Timing - Over-Retarded (Bank 1)"},
		{code: "P0016", description: "Crankshaft Position - Camshaft Position Correlation - Bank 1 Sensor A"},
		{code: "P0018", description: "Crankshaft Position - Camshaft Position Correlation - Bank 2 Sensor A"},
		{code: "P0020", description: "Intake Camshaft Position Actuator Circuit/Open (Bank 2) "},
		{code: "P0021", description: "Intake Camshaft Position Timing - Over-Advanced (Bank 2)"},
		{code: "P0022", description: "Intake Camshaft Position Timing - Over-Retarded (Bank 2) "},
		{code: "P0040", description: "Oxygen Sensor Signals Swapped Bank 1 Sensor 1/Bank 2 Sensor 1 "},
		{code: "P0041", description: "Oxygen Sensor Signals Swapped Bank 1 Sensor 2/Bank 2 Sensor 2"},
		{code: "P0053", description: "HO2S Heater Resistance (Bank 1, Sensor 1) "},
		{code: "P0054", description: "HO2S Heater Resistance (Bank 1, Sensor 2)"},
		{code: "P0055", description: "HO2S Heater Resistance (Bank 1, Sensor 3) "},
		{code: "P0059", description: "HO2S Heater Resistance (Bank 2, Sensor 1) "},
		{code: "P0060", description: " HO2S Heater Resistance (Bank 2, Sensor 2)"},
		{code: "P0068", description: "Manifold Absolute Pressure (MAP)/Mass Air Flow (MAF) - Throttle Position Correlation "},
		{code: "P0102", description: "Mass or Volume Air Flow A Circuit Low "},
		//{code: "", description: ""}
      ]);
    });
};
