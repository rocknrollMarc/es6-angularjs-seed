//export var appControllers = angular.module('appControllers', []);
//export var appRouter = angular.module('appRouter', ['ngRoute', appControllers.name]);
import router from './router';
export var app = angular.module('es6PredixApp', ['ngRoute']);

export function bootstrap(){

	//Mount the router
	router(app);

	//Bootstrap the app
	angular.element(document).ready(function() {
		console.warn('Bootstrapping es6 app', app);
		angular.bootstrap(document, [app.name]);
	});
}
