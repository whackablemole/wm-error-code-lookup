const server = require('./Server/app');

const port = process.env.PORT || 9000;

server.listen(port, () => {
	console.log(`\n***Server running on ${port}***\n`);
});