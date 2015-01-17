//main-ctrl.js
export class HomeController {
   constructor($scope) {
     $scope.name = 'Home';
     $scope.feature = {
       title: 'ES6 AngularJS',
       body: 'Use this to quickly start a new AngularJS & ES6 project.'
     };
     console.log('HomeController constructor', this);
   }
   get name() {
      return "World!!!";
   }
}
