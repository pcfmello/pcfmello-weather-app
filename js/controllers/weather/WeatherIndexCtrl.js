angular.module('app').controller('WeatherIndexCtrl', function($scope, WeatherAPI, $location, $route, Config) {

	$scope.slogan1 = 'WEATHER FORECAST TO ALL TIMES!';
	$scope.slogan2 = 'Weather forecast for all the world, every day!';
	$scope.textButton = 'SEARCH CITY';

	$scope.currentWeather;
	$scope.weekWeather;

	$scope.search = function(city) {
		if(city) {
			WeatherAPI.getCurrentWeather(city)
			.success(function(data) {
				$scope.currentWeather = data;
			});

			WeatherAPI.getWeekWeather(city)
			.success(function(data) {
				$scope.weekWeather = data;
			});
		}		
		$scope.city = '';
	}
	
});