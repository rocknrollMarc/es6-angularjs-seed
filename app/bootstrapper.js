
import { app } from 'scripts/app';
import router from 'scripts/router';

export function bootstrap(){

	//Mount the router
	router(app);

	//Bootstrap the app
	angular.element(document).ready(function() {
		console.log('Bootstrapping es6 app', app);
		angular.bootstrap(document, [app.name]);
	});
}
