import Home from './Home';

const

	port = 3000,

	charset = 'UTF-8',

	http = require('http');

http.createServer((request, response) => {

	response.writeHead(200, {
		'Content-Type': 'text/html'
	});

	response.end(request.url, charset);

}).listen(port);

console.log(`Server running at http://localhost:${port}`);
