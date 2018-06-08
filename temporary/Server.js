import http from 'http';

export default class Server {

	constructor() {

		this.__middlewares__ = [];

		this.__charset__ = 'UTF-8';

		this.__port__ = 3000;

	}

	charset(charset) {

		if (charset != null) {

			this.__charset__ = charset;

			return this;

		}

		return this.__charset__;

	}

	port(port) {

		if (port != null) {

			this.__port__ = port;

			return this;

		}

		return this.__port__;

	}

	use(...params) {

		var [ path, middleware ] = params.length > 1 ? [ params[0], params[1] ] : [ null, params[0] ];

		if (typeof middleware === 'function') {

			this.__middlewares__.push({ path, fn: middleware });

			return this;

		}

	}

	dequeueMiddlewares(request, response, index = 0) {

		var middleware = this.__middlewares__[index];

		const

			next = () => {

				let nextIndex = index + 1;

				if (nextIndex < this.__middlewares__.length)

					this.dequeueMiddlewares(request, response, nextIndex);

				else {

					response.writeHead(200, {
						'Content-Type': 'text/html'
					});

					response.end(request.url, this.__charset__);

				}

			};

		if (middleware.path && /(?:)/.test(request.url))

			next();

		else

			middleware.fn(request, response, next);

	}

	listen(callback) {

		http

			.createServer((request, response) => this.dequeueMiddlewares(request, response))

			.listen(this.__port__);

		callback();

	}

}
