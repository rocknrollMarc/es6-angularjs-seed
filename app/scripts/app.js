//export var appControllers = angular.module('appControllers', []);
//export var appRouter = angular.module('appRouter', ['ngRoute', appControllers.name]);
export var app = angular.module('predixApp', ['ngRoute']);


class View {
	constructor(options) {
		this.model = options.model;
		this.template = options.template;
	}

	render() {
		return _.template(this.template, this.model.toObject());
	}
}

class LogView extends View {
	render() {
		var compiled = super();
		console.log(compiled);
	}
}

class Model {
	constructor(properties) {
		this.properties = properties;
	}

	toObject() {
		return this.properties;
	}
}
