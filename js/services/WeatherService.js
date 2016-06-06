angular.module('app').factory('WeatherAPI',function($http, Config) {
    	
	var _getCurrentWeather = function(city) {
		return $http.get(Config.baseUrl + Config.current + city + Config.celsius + Config.appid);
	};
	
	var _getWeekWeather = function(city) {
		return $http.get(Config.baseUrl + Config.week + city + Config.celsius + Config.resultLimit + Config.appid);
	};
	
	return {
		getCurrentWeather: _getCurrentWeather,
		getWeekWeather: _getWeekWeather
	}	
	
});