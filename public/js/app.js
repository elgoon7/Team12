var hercules = angular.module('hercules',['ngRoute']);
var gym = '?name=ymca';

hercules.controller('MainCtrl',function($scope,$http){
	$scope.formData = {};
	var get_url = '/api/gym'+ gym;
	$http.get(get_url)
		.success(function(data){
			$scope.gymData = data;
			console.log(data);
		})
		.error(function(data){
			console.log("ERROR: "+ data);
		});


});

hercules.controller('GymCtrl',function($scope,$http){
	$scope.formData = {};
	$scope.createGym = function(){
		$http.post('/api/gym',$scope.formData)
			.success(function(data){
				$scope.formData = {};
				console.log(data);
			})
			.error(function(){
				console.log("ERROR: " + data);
			});
	};

	$scope.createUser = function(){
		$scope.formData = {};
		$http.post('/api/user',$scope.formData)
			.success(function(data){
				console.log(data);
			})
			.error(function(){
				console.log("ERROR: " + data);
			});
	};

});




