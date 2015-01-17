//page1.js
export class Page1Controller {
	constructor($scope) {
		$scope.name = 'Page 1';
		console.log('Page1Controller constructor', this);
	}
	get name() {
		return "Page 1";
	}
}
