//page2.js
export class Page2Controller {
	constructor($scope) {
		$scope.name = 'Page 2';
		console.log('Page2Controller constructor', this);
	}
	get name() {
		return "Page 2";
	}
}
