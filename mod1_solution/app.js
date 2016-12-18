(function(){
'use strict'

	angular.module('LunchChecker', ['ngRoute'])
	.controller('LunchCheckerController', function($scope){	
		$scope.dishes = "";
		$scope.result = "";
		$scope.color = "";

		$scope.displayCheckResult = function(){
			var lunchCheckResult = checkIfTooMuch($scope.dishes);
			$scope.result = lunchCheckResult[0];
			$scope.color = lunchCheckResult[1];

		};

		function checkIfTooMuch(string){
			var checkResultMsg = "";	
			var checkResultColor = "";
			var dishesCount = string.split(",").filter(function isTrue(val){var patt=new RegExp(/\w+/); return patt.test(val);}).length;
			console.log(dishesCount);
			if (dishesCount<=0){checkResultMsg="Please at least input one dish."; checkResultColor="error";}
				else if(dishesCount <=3){checkResultMsg="Enjoy your lunch!"; checkResultColor="success";}
					else{checkResultMsg="Too much!"; checkResultColor="warning";}
			return [checkResultMsg,checkResultColor];
		}
	});
})();