var garden = angular.module('garden',['ngRoute']);

garden.controller('MainCtrl',function($scope,$http){
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

garden.controller('AskCtrl',function($scope,$http){
	$scope.formData = {};
	$scope.askQuestion = function(){
		$http.post('/api/ask',$scope.formData)
			.success(function(data){
				window.location.replace("/questions");
				console.log(data);
			})
			.error(function(){
				console.log("ERROR: " + data);
			});
	};

});




