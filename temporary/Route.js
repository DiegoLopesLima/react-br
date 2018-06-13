export default class Route {

	constructor({ name, route, callback }) {

		this.name = name;

		this.route = route;

		this.regExp = new RegExp('^' + route.replace(/\:[a-z\_\$][\w\$]*([^\w\$]|$)/gi, '(.+)$1') + '$', 'i');

		this.callback = callback;

	}

	getName() {

		return this.name;

	}

	setName(name) {

		this.name = name;

		return this;

	}

	getRoute() {

		return this.route;

	}

	setRoute(route) {

		this.route = route;

		return this;

	}

	getRegExp() {

		return this.regExp;

	}

	setRegExp(regExp) {

		this.regExp = regExp;

		return this;

	}

	getCallback() {

		return this.callback;

	}

	setCallback(callback) {

		this.callback = callback;

		return this;

	}

	test(path) {

		return this.getRegExp().test(path);

	}

	getPath(params) {

		var route = this.route;

		Object.keys(params)

			.forEach(param => route = route.replace(new RegExp(`\\:${param}([^\\w\\$]|$)`, 'g'), params[param] + '$1'));

		return route;

	}

}
