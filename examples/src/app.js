(function(){
'use-strict';
	var app = angular.module('DIApp', []);

	app.controller('DIController', DIController);

	function DIController($scope) {
		$scope.name = 'Manoj';
	}

	DIController.$inject = ['$scope'];
}());