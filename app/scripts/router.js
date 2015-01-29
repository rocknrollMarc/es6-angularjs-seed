//router.js
//import controllers from 'scripts/controllers/module';
//import ngRoute from 'bower_components/angular-route/angular-route.min';
//Import controllers
import {HomeController} from 'controllers/home';
import {Page1Controller} from 'controllers/page1';
import {Page2Controller} from 'controllers/page2';
import {DataService} from 'services/dataservice';

export default function mount(module){
	console.warn('mounting routes on', module.name);

	//Add controllers to appControllers module
	module.controller('HomeController', HomeController);
	module.controller('Page1Controller', Page1Controller);
	module.controller('Page2Controller', Page2Controller);
	module.service('DataService', DataService);

	//Configure the modules router
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo: '/home'
			})
			.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			})
			.when('/page1', {
				templateUrl: 'views/page1.html',
				controller: 'Page1Controller'
			})
			.when('/page2', {
				templateUrl: 'views/page2.html',
				controller: 'Page2Controller'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}]);
}
