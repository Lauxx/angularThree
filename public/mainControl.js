angular.module('todoApp').controller('mainControl', function($scope, todoServ){


	$scope.cathat = false;
	$scope.listofthings = todoServ.list;


	$scope.fakeLogin = function(username, password){
		$scope.displayName = username;
		$scope.cathat = true;
	};
	
});