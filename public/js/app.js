var garden = angular.module('garden',['ngRoute']);
garden.controller('UserCtrl',function($scop,$http){


});

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

garden.controller('QuesCtrl',function($scope,$http){
	var get_url = '/api/questions';
	$scope.formData = {};
	$http.get(get_url)
		.success(function(data){
			$scope.questions = data;
		})
		.error(function(data){
			console.log("ERROR: "+ data);
		});
	$scope.getQuestion = function(id){
		$scope.q_id = id;
		window.location.replace("/answer");
	}
	$scope.addAnswer = function(){
		$http.post('/api/answer',$scope.formData)
			.success(function(data){
				console.log(data);
			})
			.error(function(){
				console.log("ERROR: " + data);
			});
	}
});


garden.controller('StoryCtrl',function($scope,$http){

});






