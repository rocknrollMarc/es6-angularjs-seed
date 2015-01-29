//main-ctrl.js
export class HomeController {
	constructor($scope, DataService) {
		$scope.name = 'Home';
		$scope.feature = {
			title : 'ES6 AngularJS',
			body : 'Use this to quickly start a new AngularJS & ES6 project.'
		};

		$scope.features = [{
			title : 'ECMAScript 6',
			body : 'Using the latest version of ESnext prepare for the future!'
		}, {
			title : 'AngularJS',
			body : 'Using AngularJS as the foundation for single page apps.'
		}, {
			title: 'HTML5',
			body: 'Using HTML5 for a better user experience on all platforms.'
			
		}];

		console.log('HomeController constructor', this);

		DataService.fetch('https://passbook-manager.jsapps.io/api/v1/passes');
	}
	name() {
		return "World!!!";
	}
}
