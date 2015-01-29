//dataservice.js
export class DataService {
	constructor($rootScope, $http, $q, $log) {
		$log.info('DataService constructor', this);
		this.$http = $http;
	}
	fetch(url){
		return this.$http.jsonp(url, {params: {callback: 'JSON_CALLBACK'}});
	}
}
