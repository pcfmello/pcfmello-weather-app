angular.module('app').value('Config', {
	
	baseUrl: 'http://api.openweathermap.org/data/2.5',

	current: '/weather?q=',
	week: '/forecast/daily?q=',
	
	resultLimit: '&cnt=6',
	celsius: '&units=metric',
	appid: '&appid=ca7b88c2473c3f033c3bbb43aafc39af'

});