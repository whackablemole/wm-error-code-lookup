require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet'); // Protects the tech stack by hiding it in the headers
const cors = require('cors');

const server = express();

// Import routes
// const authRouter = require('../auth/auth-routes');
// const modulesRouter = require('../routes/module-routes');
// const usersRouter = require('../routes/user-routes');
// const restricted = require('../auth/restricted-middleware');

server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
	res.json({message: 'API Status :: Online'});
});

// server.use('/api/modules', restricted, modulesRouter);
// server.use('/api/users', restricted, usersRouter);
// server.use('/api/auth', authRouter);

module.exports = server;