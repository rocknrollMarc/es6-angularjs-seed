//router.js
//import controllers from 'scripts/controllers/module';
//import ngRoute from 'bower_components/angular-route/angular-route.min';
//Import controllers
import {HomeController} from 'scripts/controllers/home';
import {Page1Controller} from 'scripts/controllers/page1';
import {Page2Controller} from 'scripts/controllers/page2';

export default function mount(module){
	console.log('mounting routes on', module);

	//Add controllers to appControllers module
	module.controller('HomeController', HomeController);
	module.controller('Page1Controller', Page1Controller);
	module.controller('Page2Controller', Page2Controller);

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
				redirectTo: '/'
			});
	}]);
}
