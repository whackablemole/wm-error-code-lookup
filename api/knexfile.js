// Update with your config settings.

module.exports = {

	development: {
	  client: 'sqlite3',
	  connection: {
		filename: './db/error-codes.db3'
	  },
	  migrations: {
		  directory: './db/migrations',
	  },
	  seeds: {
		  directory: './db/seeds'
	  },
	  useNullAsDefault: true,
	  pool: {
		  afterCreate: (conn, done) => {
			  conn.run("PRAGMA foreign_keys = ON", done);
		  }
	  }
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tablename: 'knex_migrations',
			directory: './migrations',
		}
	}
  
  };
  
  // heroku run knex migrate:latest -a [app-name-goes-here]
  