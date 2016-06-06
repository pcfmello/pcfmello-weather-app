angular.module('app').config(function($routeProvider) {
    
	 $routeProvider.when('/', {
      templateUrl: 'view/weather/weather-index.html', 
      controller: 'WeatherIndexCtrl'          
    });
   
    $routeProvider.otherwise({
      redirectTo: '/'
    });      
});